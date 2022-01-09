import React, {useEffect, useState} from 'react'
import '../css/todo.css'
import {Todo} from "./Todo";
import {fetchTodoList} from "../gateway/TodoList";
import {TodoItem} from "../lib/types/Todo";

const TodoList = () => {
  const [todoList, setTodoList] = useState<TodoItem[]>([])
  useEffect(() => {
    fetchTodoList()
      .then((todoList: TodoItem[] | null) => {
        if (todoList != null) {
          setTodoList(todoList)
        }
      }).catch((e) => console.log(e.toString()))
  }, [])

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
    <Lists todos={todoList}/>
  )
}

export default TodoList