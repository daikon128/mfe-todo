import React from 'react'
import {TodoItem} from "../lib/types/Todo";

export function Todo(todo: TodoItem) {
  return (
    <React.Fragment>
      <div className="todo">
        <div>
          title: {todo.title}
        </div>
        <div>description: {todo.description}</div>
        {
          todo.schedule != null
            ? <div>schedule: {todo.schedule.start?.toDateString()} ~ {todo.schedule.end?.toDateString()}</div>
            : <div>schedule: not yet fixed</div>
        }
      </div>
      <hr />
    </React.Fragment>
  )
}

