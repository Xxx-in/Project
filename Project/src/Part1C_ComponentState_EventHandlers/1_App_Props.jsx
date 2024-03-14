import { useState } from 'react';
import '../App.css';

// 5 - When value of any parent's props change, re-rendering of React component is not triggered automatically to reflect display on new value
// |_ refer to main.jsx -> need to call .render() manually
const App = ({ counter }) => {
  const name = 'Peter';
  const age = 10;
  // alert(`Counter passed in by Parent: ${counter}`);
  return (
    <div>
      <h1>Greetings</h1>
      {/* 3 - Individual props is bundled in parent component as JSON object && passed to child Component*/}
      <Component1_PassInProps name="Maya" age={26 + 10} />
      <Component1_PassInProps name={name} age={age} />
      <Component2_DestructurePropObj name="Simon" age={12} />
      <Component3_DestructurePropParam name="Andrew" age={24} />
      <Component4_Counter counter={counter} />
    </div>
  );
};

const Component1_PassInProps = (props) => {
  // 2 - When function is defined inside a component, it has access to component's props
  //     |_ no need pass in as function param
  function bornYear() {
    return ((new Date().getFullYear()) - props.age);
  }

  return (
    <div>
      <p>Component1_PassInProps {props.name}, you are {props.age} years old</p>
      {/* 1 - Pass in function for rendering component */}
      <p>So you were probably born in {bornYear()}</p>
    </div >
  );
};

const Component2_DestructurePropObj = (items) => {
  let { name, age, random } = items; // 3 - Parent's props are wrapped & passed in JSON object, destructured base on key name
  return (
    <>
      <h3>Destructured</h3>
      <p>Your name is {name}, age {age}. Note: {random}</p>
    </>
  );
};

// 4 - Destructure parent's prop bundled as JSON object in function argument
const Component3_DestructurePropParam = ({ name, age }) => {
  return (
    <>
      <h3>Destructured as param</h3>
      <p>Your name is {name}, age {age}.</p>
    </>
  );
};

const Component4_Counter = (props) => {
  const { counter } = props;
  return (
    <button>{counter}</button>
  );
};

export default App;
