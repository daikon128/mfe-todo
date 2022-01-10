import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Gadget from "./routes/gadget";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import TodoListPage from "./routes/todoListPage";
import TodoEditPage from "./routes/todoEditPage";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route path="gadget" element={<Gadget />}/>
          <Route path="todoList" element={<TodoListPage />}>
            <Route path=":todoId" element={<TodoEditPage />}/>
          </Route>
          <Route
            path="*"
            element={
              <main style={{ padding: "1rem" }}>
                <p>There's nothing here!</p>
              </main>
            }
          />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
