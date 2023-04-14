import { createRoot } from 'react-dom/client'

import { BrowserRouter as Router } from 'react-router-dom'
import { Auth0Provider } from '@auth0/auth0-react'

import App from './components/App'

document.addEventListener('DOMContentLoaded', () => {
  createRoot(document.getElementById('app') as HTMLElement).render(
    <Auth0Provider
      domain="dev-aaqk30w0szx78zcc.us.auth0.com"
      clientId="riEloNJSftN0VUYexvgE1DWSkSZpv95t"
      authorizationParams={{
        redirect_uri: `${window.location.origin}`,
        audience: 'https://boardgame/api',
      }}
    >
      <Router>
        <App />
      </Router>
    </Auth0Provider>

  )
})
