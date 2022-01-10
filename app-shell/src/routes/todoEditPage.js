import React from "react";
import TodoEdit from 'todo_list/TodoEdit'
import {useParams} from "react-router";

const TodoEditPage = () => {
  const params = useParams()
  const todoId = Number(params.todoId)
  return (
    <>
      <div>edit</div>
      <TodoEdit todoId={todoId}></TodoEdit>
    </>
  )

}

export default TodoEditPage
