import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import './index.css';
import { initUI } from './utils/init';

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// Initialize small UI helpers
if (typeof window !== 'undefined') initUI();
