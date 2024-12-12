import React from 'react';
import ReactDOM from 'react-dom/client'; // Use `react-dom/client`
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals'; // Optional

const root = ReactDOM.createRoot(document.getElementById('root')); // Create a root
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If using `reportWebVitals`:
reportWebVitals();
