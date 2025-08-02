import {
  createInstance,
  type ModuleFederation,
} from '@module-federation/runtime'
import React, { useState, type FC } from 'react'

export default function IndexPage() {
  const [RemoteComponent, setRemoteComponent] = useState<FC>()

  return (
    <div>
      <h1>Welcome to the Playground</h1>
      <p>This is a Next.js playground for learning and experimenting.</p>

      <div>
        <button onClick={onGetMF}>get mf</button>
        <button onClick={onLoadMod}>load mod</button>
      </div>

      {RemoteComponent && <RemoteComponent />}
    </div>
  )

  async function onGetMF() {
    getMF()
  }

  async function onLoadMod() {
    getMF()
      .loadRemote('mf_provider')
      .then((mod) => {
        console.log('Remote module loaded:', mod.default)
        setRemoteComponent(() => mod.default)
      })
  }
}

let _mf = null as null | ModuleFederation

function getMF() {
  if (_mf) {
    return _mf
  }

  _mf = createInstance({
    name: 'playground',
    remotes: [
      {
        name: 'mf_provider',
        entry: 'http://localhost:3001/mf-manifest.json',
      },
    ],
    shared: {
      react: {
        version: '18.3.1',
        lib: () => React,
        shareConfig: {
          singleton: true,
          requiredVersion: '18.3.1',
        },
      },
    },
  })

  // _mf.preloadRemote([
  //   {
  //     nameOrAlias: 'mf_provider',
  //   },
  // ])

  return _mf
}
