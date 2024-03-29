import React from 'react';
import Button from "./components/Button";
import TodoList from "./components/TodoList";
import AddTodo from "./components/AddTodo";
import TodoEdit from "./components/TodoEdit";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <Button></Button>
        <hr />
        <AddTodo></AddTodo>
        <hr />
        <TodoList onClickTodoTitle={(id: number) => alert(`click ${id} title`)}></TodoList>
        <hr />
        <TodoEdit todoId={1} />
      </header>
    </div>
  );
}

export default App;
