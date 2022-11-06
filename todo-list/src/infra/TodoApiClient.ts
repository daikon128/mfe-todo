import axios, {AxiosResponse} from "axios";

export async function getTodoList(): Promise<GetTodoListResponse>  {
  return axios({
    url: `/todoList`,
    method: "GET"
  }).then((res: AxiosResponse<GetTodoListResponse>) => {
    const {data, status} = res;
    return data;
  });
}
export async function getTodo(id: number): Promise<GetTodoResponse>  {
  return axios({
    url: `/todoList/${id}`,
    method: "GET"
  }).then((res: AxiosResponse<GetTodoResponse>) => {
    const {data, status} = res;
    return data;
  });
}

export type Todo = {
  id: number,
  title: string,
  description: string,
  schedule: {
    start: string | null,
    end: string | null
  } | null
}

export type GetTodoListResponse = Todo[]
export type GetTodoResponse = Todo
