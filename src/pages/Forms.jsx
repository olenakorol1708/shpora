import React from "react";

export const Forms = () => {
  return (
    <div className="components-conteiner">
      <h1 className="title">React Forms</h1>
      <p>
        In React, form data is usually handled by the components.When the data
        is handled by the components, all the data is stored in the component
        state.
      </p>
      <p>
        You can control changes by adding event handlers in the onChange
        attribute.
      </p>
      <p>
        We can use the useState Hook to keep track of each inputs value and
        provide a "single source of truth" for the entire application.
      </p>
      <p>
        You can control the submit action by adding an event handler in the
        onSubmit attribute for the form:
      </p>
      <pre className="code-block">{`
import { useState } from 'react';
import ReactDOM from 'react-dom/client';

function MyForm() {
  const [inputs, setInputs] = useState({});

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs(values => ({...values, [name]: value}))
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(inputs);
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>Enter your name:
      <input 
        type="text" 
        name="username" 
        value={inputs.username || ""} 
        onChange={handleChange}
      />
      </label>
      <label>Enter your age:
        <input 
          type="number" 
          name="age" 
          value={inputs.age || ""} 
          onChange={handleChange}
        />
        </label>
        <input type="submit" />
    </form>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<MyForm />);`}</pre>
      <p>
        You can control the values of more than one input field by adding a name
        attribute to each element. We will initialize our state with an empty
        object. To access the fields in the event handler use the
        event.target.name and event.target.value syntax.To update the state, use
        square brackets [bracket notation] around the property name.
      </p>
    </div>
  );
};
