import {TodoItem} from "../lib/types/Todo";
import React, {useEffect, useState} from "react";
import {fetchTodo, fetchTodoList} from "../gateway/Todo";

export default function TodoEdit(props: { todoId: number }) {
  const initialTodo = {
    id: 0,
    title: "",
    description: "",
    schedule: null
  }
  const [todo, setTodo] = useState<TodoItem>(initialTodo)

  useEffect(() => {
    fetchTodo(props.todoId)
      .then((response) => setTodo(response))
      .catch((e) => console.log(e))
  }, [])

  const changeTitle = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTodo({...todo, title: e.target.value})
  }

  const changeDescription = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTodo({...todo, description: e.target.value})
  }

  return (
    <div className="todo-edit">
      <div>
        title: <input type="text" defaultValue={todo.title} onChange={changeTitle}/>
      </div>
      <div>
        description: <input type="text" defaultValue={todo.description} onChange={changeDescription} />
      </div>
    </div>
  )
}

