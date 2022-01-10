import React from "react";
import TodoList from 'todo_list/TodoList'

export default function Todo() {
  const onClickTodoTitle = (id) => alert(id)
  return (
    <TodoList onClickTodoTitle={onClickTodoTitle}/>
  )

}