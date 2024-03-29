import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './Part1A_IntroToReact/App.jsx';
import App2 from './Part1C_ComponentState_EventHandlers/1_App_Props.jsx';
import App_State from './Part1C_ComponentState_EventHandlers/2_App_State.jsx';
import App_LiftingState from './Part1C_ComponentState_EventHandlers/3_App_LiftingState.jsx';
import App_NonScalarState from './Part1D_NonScalarState/1_nonscalarstate.jsx';
import App_AsynchronousRender from './Part1D_NonScalarState/2_asynchronousrender.jsx';

import './index.css';

/*
// In index.html, retrieve element with ID 'root' & render React component as child of retrieved element
ReactDOM.createRoot(document.getElementById('title')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);

// Will override any content in accessed element with React Components
ReactDOM.createRoot(document.getElementById('part1a')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);

// [Part1c] 5 - .render() need to be called for re-rendering React component manually whenever variable changes to reflect on display
let counter = 1;
ReactDOM.createRoot(document.getElementById('part1c_1_props')).render(
  <React.StrictMode>
    <App2 counter={counter} />
  </React.StrictMode>,
);
counter = 2;


// [Part1c] 5 - Another way is to trigger re-render every x seconds to reflect changes
setInterval(() => {
  ReactDOM.createRoot(document.getElementById('part1c_1_props2')).render(
    <React.StrictMode>
      <App2 counter={counter} />
    </React.StrictMode>,
  );
  counter += 1;
}, 1000);



ReactDOM.createRoot(document.getElementById('part1c_2_state')).render(
  <React.StrictMode>
    <App_State />
  </React.StrictMode>,
);


// Strict Mode intentionally invokes certain lifecycle methods (such as render) twice for each component
// to help detect and prevent unsafe side effects
ReactDOM.createRoot(document.getElementById('part1c_2_liftingstate')).render(
  // <React.StrictMode>
  <App_LiftingState />
  // </React.StrictMode>,
);



ReactDOM.createRoot(document.getElementById('part1d_1_nonscalarstate')).render(
  // <React.StrictMode>
  <App_NonScalarState />
  // </React.StrictMode>,
);
*/

ReactDOM.createRoot(document.getElementById('part1d_2_asynchronousrender')).render(
  <React.StrictMode>
    <App_AsynchronousRender />
  </React.StrictMode>
);