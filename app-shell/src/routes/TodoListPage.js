import React from "react";
import {useNavigate} from "react-router";
import { Outlet } from "react-router-dom";
import TodoList from 'todo_list/TodoList'

const TodoListPage = () => {
  const navigator = useNavigate()
  const onClickTodoTitle = (id) => navigator(`${id}`)
  return (
    <div>
      <TodoList onClickTodoTitle={onClickTodoTitle}/>
      <Outlet />

    </div>
  )

}

export default TodoListPage