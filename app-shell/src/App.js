import React from 'react';

import Button from "todo_list/Button";
// const Dice = React.lazy(() => import("gadget/Dice"));
import Dice from "gadget/Dice";

function App() {
  return (
    <div className="App">
      <div>on app shell</div>
      <Button></Button>
      <Dice></Dice>
    </div>
  );
}

export default App;
