export type TodoItem = {
  id: number,
  title: string,
  description: string,
  schedule: {
    start: Date | null,
    end: Date | null
  } | null
}