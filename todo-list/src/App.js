import React, { useState } from 'react';
import Button from './Button'
import Dice from "./Dice";

function App() {
  const [count, setCount] = useState(0)
  return (
    <div>
      <h1>todo-list button</h1>
      <Button></Button>
      <h1>dice role</h1>
      <Dice></Dice>
    </div>

  );
}

export default App;
