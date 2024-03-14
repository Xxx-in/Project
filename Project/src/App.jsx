import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';

// 1 - Define component && intialise in Parent Component
// 2 - Pass props to component
function App() {
  const [count, setCount] = useState(0);

  // alert("Hello from Component @ time: \n" + new Date());

  return (
    <>
      {/* Can reuse component */}
      <Component1_Hello />
      <Component1_Hello />

      <div className="card">
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

let Component2_UserDetails = (props) => {
  let randomString = (Math.random() + 1).toString(36).substring(7);
  return (
    <>
      <div id={props.name}>
        <h2>Student Details</h2>
        <p>Name: {props.name}</p>
        <p>Class: {props.class + "2013"}</p>
        <p>StudentID: {randomString}</p>
      </div>
    </>
  );
};

// {} cannot render object, only can render primitive values
// Error msg: Objects are not valid as a React child
let Component3_TeacherList = () => {
  let teachers = { ClassTeacher: "Amy", EngTeacher: "Elsa", MathTeacher: "Peter" };
  return (
    <>
      {/* <p>Class Teacher: {teachers}</p> */}
      {/* Error: Cannot render teacheres since it is a JSON object */}

      <p>Class Teacher: {teachers.ClassTeacher}</p>
    </>
  );
};

// can render Array
let Component4_SubjectList = () => {
  let subjects = ["1004", "English"];
  return (
    <>
      <p>Subjects: {subjects}</p>
    </>
  );
};
export default App;
