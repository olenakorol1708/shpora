import React from 'react'

export const State = () => {
  const [count,setCount]= React.useState(0)
  return (
    <div className="components-conteiner">
      
<h1 className = "title">React useState Hook</h1>
<p>We initialize our state by calling useState in our function component.

useState accepts an initial state and returns two values:
<ul>
  <li>The current state.</li>
  <li>A function that updates the state.</li></ul></p>
<p>Initialize state at the top of the function component.</p>

<div>
  <p className="code-block">You clicked {count} times</p>
  <button onClick = {()=>setCount(count+1)}>Click me</button>
</div>
<pre className="code-block">
  {`1:  import React, { useState } from 'react';
 2:
 3:  function Example() {
 4:    const [count, setCount] = useState(0);
 5:
 6:    return (
 7:      <div>
 8:        <p>You clicked {count} times</p>
 9:        <button onClick={() => setCount(count + 1)}>
10:         Click me
11:        </button>
12:      </div>
13:    );
14:  }`}
</pre>


    </div>
  )
}
