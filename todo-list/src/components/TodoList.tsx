import React from 'react'
import '../css/todo.css'

const TodoList = () => {
  const data: Todo[] = [
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

  const TodoComponent = (todo: Todo) => {
    return (
      <div className="todo">
        <div>title: {todo.title}</div>
        <div>description: {todo.title}</div>
        {
          todo.schedule != null
            ? <div>schedule: {todo.schedule.start.toDateString()} ~ {todo.schedule.end.toDateString()}</div>
            : <div>schedule: not yet fixed</div>
        }
      </div>
    )
  }

  interface Todo {
    title: string,
    description: string,
    schedule: {
      start: Date,
      end: Date
    } | null
  }

  type ListsProps = {
    todos: Array<Todo>
  };

  const Lists = (props: ListsProps) => {
    return (
      <div className="todo-lists">
        {
          props.todos.map((todo, index) =>
            <TodoComponent key={index} title={todo.title} description={todo.description} schedule={todo.schedule} />
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