import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';

// App as Parent component 
function App() {
  const [count, setCount] = useState(0);

  // alert("Hello from Component @ time: \n" + new Date());

  return (
    <>
      {/* 1 - Define component && intialise in Parent Component */}
      {/* Can reuse component */}
      <Component1_Hello />
      <Component1_Hello />

      <div className="card">
        {/* // 2 - Pass props from parent to child component */}
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>Time is {new Date().toTimeString()}</p>
      </div>

      <Component2_UserDetails name={"Naomi"} />
      <Component3_TeacherList />
      <Component4_SubjectList />
    </>
  );
}

let Component1_Hello = () => {
  return (
    <div>
      <p>Hello world</p>
    </div>
  );
};

// 2 - Child component using props passed from by parent component
let Component2_UserDetails = (props) => {
  let randomString = (Math.random() + 1).toString(36).substring(7);
  return (
    <>
      {/* 3 - {} as a window for JS computation within JSX code */}
      {/* compute JS expressions && sub value for rendering React component */}
      <div id={props.name}>
        <h2>Student Details</h2>
        <p>Name: {props.name}</p>
        <p>Class: {props.class + "2013"}</p>
        <p>StudentID: {randomString}</p>
      </div>
    </>
  );
};

// 4 - {} cannot render object, only can render primitive values
// Error msg: Objects are not valid as a React child
let Component3_TeacherList = () => {
  let teachers = { ClassTeacher: "Amy", EngTeacher: "Elsa", MathTeacher: "Peter" };
  return (
    <>
      {/* <p>Class Teacher: {teachers}</p> */}
      {/* Error: Cannot render teachers since it is a JSON object */}

      <p>Class Teacher: {teachers.ClassTeacher}</p>
    </>
  );
};

// 5 - {} can render Array
let Component4_SubjectList = () => {
  let subjects = ["1004", "English"];
  return (
    <>
      <p>Subjects: {subjects}</p>
    </>
  );
};
export default App;
