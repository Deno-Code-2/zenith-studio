
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'

// Fix for 404 issues on reload in production
// Check for redirect from the 404.html page
const redirect = sessionStorage.redirect;
if (redirect && redirect !== location.href) {
  sessionStorage.removeItem('redirect');
  // Strip the query parameter from the URL
  const cleanUrl = redirect.replace(/\?/, '');
  history.replaceState(null, '', cleanUrl);
}

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
