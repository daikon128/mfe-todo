import {getTodList, GetTodListResponse} from "../infra/TodListApiClient";
import {TodoItem} from "../lib/types/Todo";

export function fetchTodoList(): Promise<TodoItem[]> {
  return getTodList().then(
    (data) => {
      return data.map(todo => {
        const startDate = todo.schedule?.start != null ? new Date(todo.schedule.start) : null
        const endDate = todo.schedule?.end != null ? new Date(todo.schedule.end) : null
        const schedule = startDate != null || endDate != null ? {
          start: startDate,
          end: endDate
        } : null
        return {
          title: todo.title,
          description: todo.description,
          schedule: schedule
        }
      })
    }
  )
}