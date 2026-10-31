import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import * as Sentry from "@sentry/react";

// On configure Sentry UNIQUEMENT en production
// On utilise la variable `import.meta.env.PROD`, fournie automatiquement par Vite
if (import.meta.env.PROD) {
  Sentry.init({
    dsn: import.meta.env.VITE_SENTRY_DSN, // On la charge depuis les variables d'env

    integrations: [
      // Nouvelles syntaxes pour Sentry v8 :
      Sentry.browserTracingIntegration(), 
      Sentry.replayIntegration()
    ],

    // On configure le taux d'échantillonnage pour la performance.
    traces_sample_rate: 1.0,

    // On configure le taux d'échantillonnage pour les "replays" de session.
    replays_session_sample_rate: 0.1,  // On enregistre 10% des sessions.
    replays_on_error_sample_rate: 1.0,  // Mais on enregistre 100% des sessions où une erreur survient.
  });
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);