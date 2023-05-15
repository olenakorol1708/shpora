import React from "react";
import { NavLink,Outlet} from "react-router-dom";


export const Layout = () => {
  // const setActive = ()=>{

  // }
  return (
    <div className="container">
      
      <header className="header-link">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/components">Components</NavLink>
        <NavLink to="/props">Props</NavLink>
        <NavLink to="/lifecycle">Lifecycle</NavLink>
        <NavLink to="/dom">Virtual DOM</NavLink>
        <NavLink to="/keys">Keys</NavLink>
        <NavLink to="/events">Events</NavLink>
        <NavLink to="/state">State</NavLink>
        <NavLink to="/useEffect">useEffect</NavLink>
        <NavLink to="/refs">useRef</NavLink>
        <NavLink to="/contex">Contex</NavLink>
        <NavLink to="/memo">React memo</NavLink>
        <NavLink to="/form">Forms</NavLink>
        <NavLink to="/reactrouter">React Router</NavLink>

      </header>
     
      
      <main className="main-block">
      <Outlet/>
       
      </main>
    
    </div>
  );
};
