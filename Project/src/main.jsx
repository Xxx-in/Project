import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './Part1A_IntroToReact/App.jsx';
import App2 from './Part1C_ComponentState_EventHandlers/App_Props.jsx';
import './index.css';

// In index.html, retrieve element with ID 'root' & render React component as child of retrieved element
ReactDOM.createRoot(document.getElementById('title')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);

// Will override any content in accessed element with React Components
ReactDOM.createRoot(document.getElementById('part1b')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);

// 5 - .render() need to be called for re-rendering React component manually whenever variable changes to reflect on display
let counter = 1;
ReactDOM.createRoot(document.getElementById('part1c')).render(
  <React.StrictMode>
    <App2 counter={counter} />
  </React.StrictMode>,
);
counter = 2;


// 5 - Another way is to trigger re-render every x seconds to reflect changes
setInterval(() => {
  ReactDOM.createRoot(document.getElementById('part1c_2')).render(
    <React.StrictMode>
      <App2 counter={counter} />
    </React.StrictMode>,
  );
  counter += 1;
}, 1000)

