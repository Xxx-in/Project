// More on point 5 from './1_nonscalarstate.jsx'
import { useState } from "react";

function App() {
  return (
    <>
      <Component1_Counter />
      <Component2_Counter2 />
    </>
  );
}

function Component1_Counter() {
  const [number, setNumber] = useState(0);

  // 2 -  React waits until all code in the event handlers has run before processing your state updates. 
  // |_ Re-render only happens after all the final alert is executed
  alert(`Counter rendered`); // this alert happens after 3rd click

  return (
    <>
      <h1>Render Async</h1>
      {number}
      {/* 1 - Expectation: Click “+3” button will increment the counter 3 times because it calls setNumber(number + 1) 3 times */}
      {/* Each render’s state values are fixed as a snapshot, so the value of number variable used for computation inside 
          the event handler during first render is always 0 */}
      {/* i.e., on first click, equivalent to call setNumber(0+1) 3 times */}
      <button onClick={() => {
        setNumber(number + 1); // == 0 + 1
        alert(`Number after 1st click: ${number}`);
        setNumber(number + 1); // == 0 + 1
        alert(`Number after 2nd click: ${number}`);
        setNumber(number + 1); // == 0 + 1
        alert(`Number after 3rd click: ${number}`);
      }}>+3</button>
    </>
  );
}

function Component2_Counter2() {
  const [number, setNumber] = useState(0);

  alert(`Counter2 rendered`);
  return (
    <>
      <p><b>When set function is called multiple times in 1 render batch, final one overrides & takes into effects</b></p >
      {number}
      {/* 3 - When an event is triggered, all operations within corresponding event handler function will be executed before state is updated and then rendered  */}
      <button onClick={() => {
        setNumber(number + 5);
        setNumber(n => n + 1);
        setNumber(42); // This set function will override all previous function calls & take into final effect
      }}>Increase the number</button>
    </>
  );
}
export default App;