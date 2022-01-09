export type TodoItem = {
  title: string,
  description: string,
  schedule: {
    start: Date | null,
    end: Date | null
  } | null
}