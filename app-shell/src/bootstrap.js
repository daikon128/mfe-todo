import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Gadget from "./routes/gadget";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Todo from "./routes/todo";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}/>
        <Route path="/gadget" element={<Gadget />}/>
        <Route path="/todo" element={<Todo />}/>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
