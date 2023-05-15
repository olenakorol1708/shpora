import React from 'react'

export const Events = () => {
  return (
    <div className="components-conteiner">
  <h1 className = "title">React Events</h1>
  <p>React has the same events as HTML: click, change, mouseover etc.</p>
<p>
React event handlers are written inside curly braces:</p> 
<pre className="code-block">{`onClick={shoot}  instead of onClick="shoot()".
<button onClick={shoot}>Take the Shot!</button>`}</pre>

  
  <p>To pass an argument to an event handler, use an arrow function.</p> 
  <pre className="code-block">
    {`function Football() {
  const shoot = (a) => {
    alert(a);
  }

  return (
    <button onClick={() => shoot("Goal!")}>Take the shot!</button>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Football />);`}
  </pre>
    </div>
  )
}
