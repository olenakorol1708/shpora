import React from 'react'

export const HookUseEffect = () => {
  return (
    <div className="components-conteiner">
 <h1 className = "title">React useEffect Hooks</h1>
 <p>
 The useEffect Hook allows you to perform side effects in your components.

Some examples of side effects are: fetching data, directly updating the DOM, and timers.
 </p>
 <p>
 useEffect accepts two arguments. The second argument is optional.
 </p>
 <pre  className="code-block">{`useEffect(<function>, <dependency>)
 
 
import { useState, useEffect } from "react";
import ReactDOM from "react-dom/client";

function Timer() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      setCount((count) => count + 1);
    }, 1000);
  },[]);

  return <h1>I've rendered {count} times!</h1>;
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Timer />);

useEffect(() => {
  //Runs on every render
});

useEffect(() => {
  //Runs only on the first render
}, []);

useEffect(() => {
  //Runs on the first render
  //And any time any dependency value changes
}, [prop, state]);
`}</pre>
    </div>
  )
}
