import React from 'react'
import ReactDOM from 'react-dom'
import { MainLayout } from './MainLayout'
import { mergeStyles } from 'office-ui-fabric-react'
import { initializeIcons } from 'office-ui-fabric-react/lib/Icons'
initializeIcons()

// Inject some global styles
mergeStyles({
  selectors: {
    ':global(body), :global(html), :global(#app)': {
      margin: 0,
      padding: 0,
      height: '100vh'
    }
  }
})

ReactDOM.render(<MainLayout />, document.getElementById('app'))
