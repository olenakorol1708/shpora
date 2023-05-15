import React from 'react'

export const Contex = () => {
  return (
    <div className="components-conteiner">
       <h1 className = "title">React useContext Hook</h1>
       <p>React Context is a way to manage state globally.

It can be used together with the useState Hook to share state between deeply nested components more easily than with useState alone.</p>
       <p>
       To create context, you must Import createContext and initialize it.

       Wrap child components in the Context Provider and supply the state value.


       </p>
       <pre className="code-block" >{`
import { useState, createContext, useContext } from "react";
import ReactDOM from "react-dom/client";

const UserContext = createContext();

function Component1() {
  const [user, setUser] = useState("Jesse Hall");

  return (
    <UserContext.Provider value={user}>
      <h1>Write your code with user like dynamic variable with curly brackets</h1>
      <Component2 />
    </UserContext.Provider>
  );
}

function Component5() {
  const user = useContext(UserContext);

  return (
    <>
      <h1>Component 5</h1>
      <h2>Write your code with user like dynamic variable with curly brackets</h2>
    </>
  );
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Component1 />);`}</pre>
       </div>
  )
}
