import { Auth } from '@supabase/auth-ui-react'
import { ThemeSupa } from '@supabase/auth-ui-shared'
import { createClient, type Session } from '@supabase/supabase-js'
import { useEffect, useState } from 'react'

const supabase = createClient(
  'https://govprwniosfualuhegmy.supabase.co',
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImdvdnByd25pb3NmdWFsdWhlZ215Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTUyMTMxODIsImV4cCI6MjA3MDc4OTE4Mn0.qzVnAHtWX8rxYdUF3pn_44mjKK5-09T8--tMedKtQec'
)

export default function App() {
  const [session, setSession] = useState(null as null | Session)

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session)
    })

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session)
    })

    return () => {
      subscription.unsubscribe()
    }
  }, [])

  if (!session) {
    return (
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '100vh',
        }}
      >
        <Auth
          supabaseClient={supabase}
          appearance={{
            theme: ThemeSupa,
          }}
        />
      </div>
    )
  }

  return (
    <div>
      <h1>Welcome to the App</h1>
    </div>
  )
}
