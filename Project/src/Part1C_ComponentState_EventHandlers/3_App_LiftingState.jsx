import { useState } from "react";

// Lifting state from child component to parent component
// Aim: Maintain data flow from parent to child
// |_ All child can access parent's state variable, parent cannot access child
// When any of parent's state changes, itself & its child component re-renders 

const App = () => {
  // 1 - Lift counter from child to parent 
  // |_ Component2/3/4 can access & modify state while Component1 is refreshed to reflect newest state
  let [counter, setCounter] = useState(0);

  // 2 - Wrap function call for setter function with another function declaration to pass as prop to child
  let addOne = () => { setCounter(counter + 1); };
  let handleClickMinusOne = () => { setCounter(counter - 1); };

  alert("Render parent component");

  return (
    <div id="App_LiftingState">
      {/* 3 - Calling function that changes the state causes the component holding the state declaration & all its child components to re-render. */}
      {/* 4 - Pass state & setStateFunction() as props to child */}
      <Component1_Display counter={counter} />
      <Component2_ResetCounter setCounter={setCounter} />
      <Component3_AddCounter handleClickFn={addOne} />
      <Component4_MinusCounter onClickFn={handleClickMinusOne} />

    </div>
  );
};

// 5 - State/SetState() is used as usual props in child component
function Component1_Display(props) {
  return (
    <p>Counter: {props.counter} </p>
  );
}

function Component2_ResetCounter({ setCounter }) {
  alert("Render Reset Button");
  return (
    <button style={{ backgroundColor: "red" }} onClick={() => { setCounter(0); }}> Reset</button >
  );
}

function Component3_AddCounter({ handleClickFn }) {
  alert("Render Add 1 Button");
  return (
    <button style={{ backgroundColor: "green" }} onClick={handleClickFn}>Add 1</button>
  );
}

function Component4_MinusCounter({ onClickFn }) {
  alert("Render Minus 1 Button");
  return (
    <button style={{ backgroundColor: "orange" }} onClick={onClickFn}>Minus 1</button>
  );
}

export default App;