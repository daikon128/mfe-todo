import React from 'react';
import Button from "./components/Button";
import TodoList from "./components/TodoList";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <Button></Button>
        <TodoList></TodoList>
      </header>
    </div>
  );
}

export default App;
