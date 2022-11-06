import React from 'react';
import {NavLink, Outlet} from "react-router-dom";

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
        <NavLink to="/todo-list">Todo</NavLink>
        <NavLink to="/gadget">Gadget</NavLink>
      </nav>
      <Outlet />
    </div>
  );
}

export default App;
