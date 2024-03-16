// Managing non-scalar state
import { useState } from "react";

const App = () => {
  const [left, setLeft] = useState(0);
  const [right, setRight] = useState(0);

  // alert('Render App');

  return (
    <>
      <Component1_SeparateState left={left} onClickLeft={setLeft} right={right} onClickRight={setRight} />
      <Component2_NonScalarState />
      <Component3_ArrayAsState />
    </>
  );
};

let Component1_SeparateState = (props) => {
  // alert("Render Set 1 LEFT & RIGHT button");

  return (
    <div>
      <p>Using scalar variable</p>
      {props.left}
      <button id="left" style={{ backgroundColor: "blue" }} onClick={() => { props.onClickLeft(props.left + 1); }}>
        LEFT
      </button>

      <button id="right" style={{ backgroundColor: "red" }} onClick={() => { props.onClickRight(props.right + 1); }}>
        RIGHT
      </button>
      {props.right}
    </div>
  );
};


function Component2_NonScalarState() {
  // alert("Render Set 2 LEFT & RIGHT button");
  // 1 - State can be non-scalar value as well
  // ** Note: not always the best case to do so
  const [clickSet2_L, setClickSet2_L] = useState({ left: 0, right: 0 });
  const [clickSet2_R, setClickSet2_R] = useState({ left: 0, right: 0 });

  console.log(JSON.stringify(`clickSet2_L: ${JSON.stringify(clickSet2_L)}`));
  console.log(JSON.stringify(`clickSet2_R: ${JSON.stringify(clickSet2_R)}`));

  return (
    <>
      {/* 2 - When calling setter function for non-scalar state, have to pass in data with same structure as init value */}
      {/* After update state by calling setClicks(), state changes from JSON object {left: _, right: _} -> scalar integer value */}
      {/* clicks.right && clicks['left'] syntax will hit error */}
      <div id="set1">
        <p>Set 1 - Non-scalar state set wrongly</p>
        {clickSet2_L['left']}
        <button style={{ backgroundColor: "purple" }} onClick={() => { setClickSet2_L(clickSet2_L['left'] + 1); }}>LEFT1</button>
        <button style={{ backgroundColor: "green" }} onClick={() => setClickSet2_L(clickSet2_L.right + 1)}>RIGHT1</button>
        {clickSet2_L.right}
      </div>

      {/* 2 - Fix */}
      <div id="set2">
        <p>Set 2 - Non-scalar state set correctly</p>
        {clickSet2_R['left']}
        <button style={{ backgroundColor: "cyan" }} onClick={() => { setClickSet2_R({ left: clickSet2_R.left + 1, right: clickSet2_R.right }); }}>LEFT2</button>
        {/* 2.1 - Use {...jsonName} on JSON object to create a shallow copy of the JSON && reassign value to already existing key to override value  */}
        <button style={{ backgroundColor: "greenyellow" }} onClick={() => setClickSet2_R({ ...clickSet2_R, right: clickSet2_R.right + 1 })}>RIGHT2</button>
        {clickSet2_R.right}
      </div>

    </>
  );
}

function Component3_ArrayAsState() {
  // alert("Render Set 3 LEFT & RIGHT button");
  const [clickSet3_L, setClickSet3_L] = useState(0); // How many times left button is clicked
  const [clickSet3_R, setClickSet3_R] = useState(0); // How many times left button is clicked
  // 3 - Using array as state
  const [allClicks, setAll] = useState([]); // Store history of L & R buttons clicked sequentially

  const handleLeftClick = () => {
    // 4 - State of React components must not be mutated directly -> make a new shallow copy, assign altered copy && set with function
    // |_ Even if work, may lead to unexpected bugs which is hard to debug
    setAll(allClicks.concat('L')); // concat() method does not mutate the existing array; return a new copy of array with added item

    // 5.2 - Note that clickSet3_L is not updated to +1 immediately after exec set function
    // |_ State change -> trigger render -> rendering takes a snapshot of everything in the current moment & use current values for computation to sub in for render
    // |_ Render requests are queued up sequentially based on sequence of state changes   
    // How React handle state change triggering renders: snapshot everything for computation to be used during render before updating state
    // clickSet3_R is permanently fixed at current state value for computation (i.e., at init = 0) before it is rendered
    alert(`left is clicked: ${clickSet3_L}`);
    setClickSet3_L(clickSet3_L + 1); // == 0 + 1
    alert(`left is updated: ${clickSet3_L}`);

    setTotalClicks(clickSet3_L + clickSet3_R); // == 0 + clickSet3_R 
  };

  const handleRightClick = () => {
    setAll(allClicks.concat('R'));

    // 5,3 - Fix: don't rely on state value when setting another state
    let newclickSet3_R = clickSet3_R + 1;
    setClickSet3_R(clickSet3_R + 1);
    setTotalClicks(clickSet3_L + newclickSet3_R); // Note: Now R is always reflected correctly while L is still not
  };

  // 5 - Updates are asynchronous
  const [totalClicks, setTotalClicks] = useState(0); // How many times in total Left & Right button is clicked

  return (
    <div id="set3">
      <p>Set 3 - Using Array as State</p>
      {clickSet3_L}
      <button onClick={handleLeftClick}>left</button>
      <button onClick={handleRightClick}>right</button>
      {clickSet3_R}
      <p>{`History: ${allClicks.join('-')}`}</p>
      <p>{`Total Clicks: ${totalClicks}`}</p> {/* 5.1 - Note that total clicks are always 1 lesser */}
    </div>
  );
}

/** Note: More about part 5 on "./2_asynchronousrender.jsx" **/

export default App;