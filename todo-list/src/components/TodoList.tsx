import React from 'react'
import '../css/todo.css'
import {Todo, TodoItem} from "./Todo";

const TodoList = () => {
  const data: TodoItem[] = [
    {
      title: "cleaning",
      description: "",
      schedule: {
        start: new Date(),
        end: new Date()
      }
    },
    {
      title: "study",
      description: "",
      schedule: null
    },
    {
      title: "shopping",
      description: "",
      schedule: null
    }
  ]

  const Lists = (props: {todos: Array<TodoItem>}) => {
    return (
      <div className="todo-lists">
        {
          props.todos.map((todo, index) =>
            <Todo key={index} {...todo} />
          )
        }
      </div>
    )
  }
  return (
    <Lists todos={data}/>
  )
}

export default TodoList