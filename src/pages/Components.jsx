import React from "react";

export const Components = () => {
  return (
    <div className="components-conteiner">
      <h1 className = "title">React Components</h1>
      <p>
        Components are independent and reusable bits of code. They serve the
        same purpose as JavaScript functions, but work in isolation and return
        HTML.
      </p>
      <p>
        Components come in two types, Class components and Function
        components.When creating a React component, the component's name MUST
        start with an upper case letter.
      </p>

      <h3>Class Component</h3>
      <p>
        A class component must include the extends React.Component statement.
        This statement creates an inheritance to React.Component, and gives your
        component access to React.Component's functions. The component also
        requires a render() method, this method returns HTML.
      </p>

    
      <p>
        <pre className="code-block">
          {`class Car extends React.Component {
  render() {
    return <h2>Hi, I am a Car!</h2>;
  }
}`}
        </pre>
      </p>
      <h3>Function Component</h3>
      <p>
        Here is the same example as above, but created using a Function
        component instead. A Function component also returns HTML, and behaves
        much the same way as a Class component, but Function components can be
        written using much less code, are easier to understand, and will be
        preferred in this tutorial.
      </p>
      <p>We can refer to components inside other components:</p>
      <pre className="code-block">
        {` 
     import React from 'react';
     import ReactDOM from 'react-dom/client';
     import Car from './Car.js';


     function Car() {
  return <h2>I am a Car!</h2>;
}
function Garage() {
  return (
    <>
      <h1>Who lives in my Garage?</h1>
      <Car />
    </>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Garage />);
`}
      </pre>
    </div>
  );
};
