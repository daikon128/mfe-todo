import React from 'react'
import {TodoItem} from "../lib/types/Todo";

export function Todo(props: { todo: TodoItem, onClickTodoTitle: (todoId: number) => void }) {
  const todo = props.todo
  const onClickTitle = () => props.onClickTodoTitle(todo.id)
  return (
    <React.Fragment>
      <div className="todo">
        <div onClick={onClickTitle}>
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

