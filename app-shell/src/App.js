import React from 'react';
import { Link, Outlet } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <div>on app shell</div>
      <nav
        style={{
          borderBottom: "solid 1px",
          paddingBottom: "1rem"
        }}
      >
        <Link to="/todo">Todo</Link>
        <Link to="/gadget">Gadget</Link>
      </nav>
      <Outlet />
    </div>
  );
}

export default App;
