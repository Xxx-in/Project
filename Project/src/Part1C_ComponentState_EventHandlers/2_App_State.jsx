import { useState } from 'react';

// 6 - useState() hook to store varying data that will trigger re-render when value changes
// |_ State = varying data that will change over time
// |_ State is attached to component where it is defined in -> re-render happens to the attached component
// Equivalent to declaring a variable with an implicit event handler that re-renders Component when value change
const App = () => {
  return (
    <>
      <Component1_TimerCounter />
      <Component2_ClickCounter />
      {/* <Component3_HelloCounter /> */}
    </>
  );
};

function Component1_TimerCounter() {
  const [counter, setCounter] = useState(0); // [variable, setterFn] = useState(initValue);

  setTimeout(
    () => setCounter(counter + 1), // setCounter(): update counter variable -> counter state changes -> re-render entire App component
    1000
  );

  return (
    <button>{counter}</button>
  );
}

// 7 - Event handler
let Component2_ClickCounter = () => {
  let [clickCounter, setClickCounter] = useState(0);

  // 7.1 - Define handler function as logic to be done when event happens
  function handleClick() {
    setClickCounter(clickCounter++);
    alert(`Button clicked ${clickCounter} times.`);
  }

  return (
    <>
      {/*  7.2 - Attach to handler function to event listener */}
      <button onClick={handleClick} style={{ backgroundColor: "green" }}> {clickCounter}</button >
      <button onClick={() => setClickCounter(0)} style={{ backgroundColor: "orange" }}>Reset</button>
    </>
  );
};

// 8 - Event handler must be assigned to a function / function reference
let Component3_HelloCounter = () => {
  let [helloCounter, setHelloCounter] = useState(0);

  return (
    <>
      {/* 8.1 - To render component from JSX code, JSX is transpiled to JS -> JS's nature is to execute function call immediately -> trigger re-render -> infinite re-render */}
      {/* Error: Too much re-render */}
      {/* Function call is not treated as  */}
      <button onClick={setHelloCounter(0)} style={{ backgroundColor: "pink" }}>Hello!</button>
    </>
  );
};

// Function vs Function Call vs Function Reference
// Function = function declaration
// Function Call = functionName()
// Function Reference = functionName

export default App;