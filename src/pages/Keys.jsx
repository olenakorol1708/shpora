import React from 'react'

export const Keys = () => {
  return (
    <div className="components-conteiner">
     <h1 className = "title">Keys</h1>
     <p>Keys allow React to keep track of elements. This way, if an item is updated or removed, only that item will be re-rendered instead of the entire list.

Keys need to be unique to each sibling. But they can be duplicated globally.</p>
     <p>Generally, the key should be a unique ID assigned to each item. As a last resort, you can use the array index as a key.</p>
     <pre className="code-block">{`function Car(props) {
  return <li>I am a { props.brand }</li>;
}

function Garage() {
  const cars = [
    {id: 1, brand: 'Ford'},
    {id: 2, brand: 'BMW'},
    {id: 3, brand: 'Audi'}
  ];
  return (
    <>
      <h1>Who lives in my garage?</h1>
      <ul>
        {cars.map((car) => <Car key={car.id} brand={car.brand} />)}
      </ul>
    </>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Garage />);`}</pre>
    </div>
  )
}
