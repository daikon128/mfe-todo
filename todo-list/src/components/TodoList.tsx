import React, {useEffect, useState} from 'react'
import '../css/todo.css'
import {Todo} from "./Todo";
import {fetchTodoList} from "../gateway/Todo";
import {TodoItem} from "../lib/types/Todo";

const TodoList = (props: { onClickTodoTitle: (todoId: number) => void }) => {
  const [todoList, setTodoList] = useState<TodoItem[]>([])
  useEffect(() => {
    fetchTodoList()
      .then((todoList: TodoItem[] | null) => {
        if (todoList != null) {
          setTodoList(todoList)
        }
      }).catch((e) => console.log(e.toString()))
  }, [])

  const Lists = (props: {todos: Array<TodoItem>, onClickTodoTitle: (todoId: number) => void}) => {
    return (
      <div className="todo-lists">
        {
          props.todos.map((todo, index) => {
            return <Todo key={index} todo={todo} onClickTodoTitle={props.onClickTodoTitle}/>
          })
        }
      </div>
    )
  }
  return (
    <Lists todos={todoList} onClickTodoTitle={props.onClickTodoTitle}/>
  )
}

export default TodoList