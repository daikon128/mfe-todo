import React, {VFC} from 'react'
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
      <React.Fragment>
        <div className="todo">
          <div>title: {todo.title}</div>
          <div>description: {todo.description}</div>
          {
            todo.schedule != null
              ? <div>schedule: {todo.schedule.start.toDateString()} ~ {todo.schedule.end.toDateString()}</div>
              : <div>schedule: not yet fixed</div>
          }
        </div>
        <hr />
      </React.Fragment>
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
  }

  const Lists:VFC<ListsProps> = (props) => {
    return (
      <div className="todo-lists">
        {
          props.todos.map((todo, index) =>
            <TodoComponent key={index} {...todo} />
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