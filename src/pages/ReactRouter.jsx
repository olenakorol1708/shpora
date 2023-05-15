import React from 'react'

export const ReactRouter = () => {
  return (
    <div className="components-conteiner">
 <h1 className = "title">React Router</h1>
 <p>
 To add React Router in your application, run this in the terminal from the root directory of the application:
 </p>
 <pre className="code-block">{`npm i -D react-router-dom`}</pre>

 <p>
We wrap our content first with <pre className="code-block">{`<BrowserRouter>`}</pre>
 </p>
<p>Then we define our  <pre className="code-block">{`<Routes>`}</pre>
An application can have multiple <pre className="code-block">{`<Routes>`}</pre></p>
<p> The Layout component has<pre className="code-block">{`<Outlet>`}</pre> (renders the current route selected) and <pre className="code-block">{`<Link>`}</pre> elements ( is used to set the URL and keep track of browsing history.).</p>
<p>Anytime we link to an internal path, we will use <pre className="code-block">{`<Link>`}</pre></p>
<p> The "layout route" is a shared component that inserts common content on all pages, such as a navigation menu.</p>
<pre>{`import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import Blogs from "./pages/Blogs";
import Contact from "./pages/Contact";
import NoPage from "./pages/NoPage";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="blogs" element={<Blogs />} />
          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);`}</pre>

 <pre className="code-block">{`
import { Outlet, Link } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/blogs">Blogs</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </nav>

      <Outlet />
    </>
  )
};

export default Layout;`}</pre>
    </div>
  )
}
