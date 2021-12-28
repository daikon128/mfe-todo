import React from 'react';
import Dice from './Dice'
import Clock from "./Clock";
import Sandbox from "./Sandbox";

function App() {
  return (
    <div className="App">
      <h1>dice</h1>
      <Dice></Dice>
      <h1>Clock</h1>
      <Clock></Clock>
      <h1>Sandbox</h1>
      <Sandbox></Sandbox>
    </div>
  );
}

export default App;
