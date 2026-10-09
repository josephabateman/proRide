import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';

const root = document.getElementById('root');
const app = (
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// Production pages are pre-rendered to static HTML (scripts/prerender.js), so
// attach to that markup instead of re-drawing it; dev/unrendered pages render.
if (root.hasChildNodes()) {
  ReactDOM.hydrate(app, root);
} else {
  ReactDOM.render(app, root);
}
