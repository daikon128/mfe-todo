import React from 'react';

import Button from "todo_list/Button";
import Dice from "gadget/Dice";
import { Link } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <div>on app shell</div>
      <ul>
        <li>
          <Link to="/todo">Todo</Link>
        </li>
      </ul>
      <ul>
        <li>
          <Link to="/gadget">Gadget</Link>
        </li>
      </ul>
    </div>
  );
}

export default App;
