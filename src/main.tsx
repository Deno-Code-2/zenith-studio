
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'

// Fix for 404 issues on reload in production
// Check for redirect from the 404.html page
const redirect = sessionStorage.redirect;
if (redirect && redirect !== location.href) {
  // Clean up the storage
  sessionStorage.removeItem('redirect');
  
  // Get just the path portion of the URL
  const url = new URL(redirect);
  const path = url.pathname + url.search + url.hash;
  
  // Replace the current history state
  history.replaceState(null, '', path);
  
  console.log('Redirected from', redirect, 'to', path);
}

// Error handling for module loading
window.addEventListener('error', (event) => {
  if (event.message && event.message.includes('Failed to fetch dynamically imported module')) {
    console.error('Module loading error:', event);
    // Force a full page reload if dynamic imports fail
    window.location.reload();
  }
});

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
