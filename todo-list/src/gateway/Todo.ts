import {getTodo, getTodoList, GetTodoListResponse} from "../infra/TodoApiClient";
import {TodoItem} from "../lib/types/Todo";

export function fetchTodoList(): Promise<TodoItem[]> {
  return getTodoList().then(
    (data) => {
      return data.map(todo => {
        const startDate = todo.schedule?.start != null ? new Date(todo.schedule.start) : null
        const endDate = todo.schedule?.end != null ? new Date(todo.schedule.end) : null
        const schedule = startDate != null || endDate != null ? {
          start: startDate,
          end: endDate
        } : null
        return {
          id: todo.id,
          title: todo.title,
          description: todo.description,
          schedule: schedule
        }
      })
    }
  )
}

export function fetchTodo(id: number): Promise<TodoItem> {
  return getTodo(id).then(
    (todo) => {
      const startDate = todo.schedule?.start != null ? new Date(todo.schedule.start) : null
      const endDate = todo.schedule?.end != null ? new Date(todo.schedule.end) : null
      const schedule = startDate != null || endDate != null ? {
        start: startDate,
        end: endDate
      } : null
      return {
        id: todo.id,
        title: todo.title,
        description: todo.description,
        schedule: schedule
      }
    }
  )
}