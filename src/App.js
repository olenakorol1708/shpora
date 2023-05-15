import { Routes, Route } from "react-router-dom";

import { Homepage } from "./pages/Homepage.jsx";
import { Keys } from "./pages/Keys.jsx";
import { Refs } from "./pages/Refs.jsx";
import { VirtualDOM } from "./pages/VirtualDOM";
import { Props } from "./pages/Props.jsx";
import { Components } from "./pages/Components.jsx";
import { Events } from "./pages/Events.jsx";
import { Memo } from "./pages/Memo.jsx";
import { Lifecycle } from "./pages/Lifecycle.jsx";
import { State } from "./pages/State.jsx";
import { HookUseEffect } from "./pages/HookUseEffect.jsx";
import { Contex } from "./pages/Contex.jsx";
import { Forms } from "./pages/Forms.jsx";
import { ReactRouter } from "./pages/ReactRouter.jsx";
import { Layout } from "./components/Layout.jsx";

import "./App.css";

function App() {
 

  return (
    <>
    
    
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Homepage />} />
          <Route path="components" element={<Components />} />
          <Route path="props" element={<Props />} />
          <Route path="dom" element={<VirtualDOM />} />
          <Route path="keys" element={<Keys />} />
          <Route path="events" element={<Events />} />
          <Route path="state" element={<State />} />
          <Route path="useEffect" element={<HookUseEffect />} />
          <Route path="refs" element={<Refs />} />
          <Route path="contex" element={<Contex />} />
          <Route path="memo" element={<Memo />} />
          <Route path="form" element={<Forms />} />
          <Route path="lifecycle" element={<Lifecycle />} />
          <Route path="reactrouter" element={<ReactRouter />} />
        </Route>
      </Routes>
      
    </>
  );
}

export default App;
