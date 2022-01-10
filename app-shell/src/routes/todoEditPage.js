import React from "react";
import TodoEdit from 'todo_list/TodoEdit'
import {useParams} from "react-router";

const TodoEditPage = () => {
  const params = useParams()
  return (
    <>
      <div>edit</div>
      <TodoEdit id={params.todoId}></TodoEdit>
    </>
  )

}

export default TodoEditPage
