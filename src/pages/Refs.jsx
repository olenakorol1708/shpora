import React from 'react'

export const Refs = () => {
  return (
    <div className="components-conteiner">
   <h1 className = "title">React useRef Hook</h1>
   <p>The useRef Hook allows you to persist values between renders.</p>
   <p>It can be used to store a mutable value that does not cause a re-render when updated.</p>
   <p>It can be used to access a DOM element directly.useRef() only returns one item. It returns an Object called current.When we initialize useRef we set the initial value: useRef(0).

It's like doing this:
<pre className="code-block"> {`const count = {current: 0}.`}
</pre> We can access the count by using count.current.</p>
   <p>The useRef Hook can also be used to keep track of previous state values.

This is because we are able to persist useRef values between renders.</p>
<pre className="code-block">{`import { useState, useEffect, useRef } from "react";
import ReactDOM from "react-dom/client";

function App() {
  const [inputValue, setInputValue] = useState("");
  const previousInputValue = useRef("");

  useEffect(() => {
    previousInputValue.current = inputValue;
  }, [inputValue]);

  return (
    <>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <h2>Current Value: {inputValue}</h2>
      <h2>Previous Value: {previousInputValue.current}</h2>
    </>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);`}</pre>
    </div>
  )
}
