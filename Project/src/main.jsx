import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';

// In index.html, retrieve element with ID 'root' & render React component as child of retrieved element
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);

// Will override any content in accessed element with React Components
ReactDOM.createRoot(document.getElementById('title')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
