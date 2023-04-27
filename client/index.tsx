import { createRoot } from 'react-dom/client'

import { BrowserRouter as Router } from 'react-router-dom'
import { Auth0Provider } from '@auth0/auth0-react'

import App from './components/App'

document.addEventListener('DOMContentLoaded', () => {
  createRoot(document.getElementById('app') as HTMLElement).render(
    <Auth0Provider
      domain="dev-b5xm2208p76kidzl.us.auth0.com"
      clientId="Vj5avf31MXEaA2cbhkHA7TOloCzj4eET"
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
