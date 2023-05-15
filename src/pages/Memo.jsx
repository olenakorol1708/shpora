import React from "react";

export const Memo = () => {
  return (
    <div className="components-conteiner">
      <h1 className="title">React useMemo Hook</h1>
      <p>
        The React useMemo Hook returns a memoized value.The useMemo Hook only
        runs when one of its dependencies update.The useMemo and useCallback
        Hooks are similar. 
      </p>
      <p>The main difference is that useMemo returns a
        memoized value and useCallback returns a memoized function.We can wrap
        the expensive function call with useMemo.
        The useMemoHook accepts a second parameter to declare dependencies. The expensive function will only run when its dependencies have changed.</p>
      <pre className="code-block" >{`
  import { useState, useMemo } from "react";
  import ReactDOM from "react-dom/client";
  
  const App = () => {
    const [count, setCount] = useState(0);
    const [todos, setTodos] = useState([]);
    const calculation = useMemo(() => expensiveCalculation(count), [count]);
  
    const increment = () => {
      setCount((c) => c + 1);
    };
    const addTodo = () => {
      setTodos((t) => [...t, "New Todo"]);
    };
  
    return (
      <div>
        <div>
          <h2>My Todos</h2>
          {todos.map((todo, index) => {
            return <p key={index}>{todo}</p>;
          })}
          <button onClick={addTodo}>Add Todo</button>
        </div>
        <hr />
        <div>
          Count: {count}
          <button onClick={increment}>+</button>
          <h2>Expensive Calculation</h2>
          {calculation}
        </div>
      </div>
    );
  };
  
  const expensiveCalculation = (num) => {
    console.log("Calculating...");
    for (let i = 0; i < 1000000000; i++) {
      num += 1;
    }
    return num;
  };
  
  const root = ReactDOM.createRoot(document.getElementById('root'));
  root.render(<App />);`}</pre>
    </div>
  );
};
