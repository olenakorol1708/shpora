import React from 'react'

export const Props = () => {
  return (
    <div className="components-conteiner">
   <h1  className = "title">React Props</h1> 
  <p>
  React Props are like function arguments in JavaScript and attributes in HTML.
  Conceptually, components are like JavaScript functions. They accept arbitrary inputs (called “props”) and return React elements describing what should appear on the screen.
  </p>
  <p>Props are also how you pass data from one component to another, as parameters.</p>
  <pre className="code-block">
    {`function Car(props) {
  return <h2>I am a { props.brand }!</h2>;
}

function Garage() {
  return (
    <>
      <h1>Who lives in my garage?</h1>
      <Car brand="Ford" />
    </>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Garage />);
`}
  </pre>
  <p>
  React Props are read-only! You will get an error if you try to change their value.
  </p>
    </div>
  )
}
