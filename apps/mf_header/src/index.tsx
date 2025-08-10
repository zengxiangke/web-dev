import './index.css'

// to fix @microsoft/api-extractor issue with React, use one of:
// - import * as React from 'react'; then use React.FC
// - do not use FC to define components

export default function Provider() {
  return (
    <div className="container">
      <div className="icon-container">
        <img
          src="https://module-federation.io/svg.svg"
          alt="logo"
          className="logo-image"
        />
      </div>
      <h1 className="title">Hello Module Federation 2.0</h1>
    </div>
  )
}
