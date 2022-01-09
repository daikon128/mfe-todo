import axios, {AxiosResponse} from "axios";

const url = 'http://localhost:8003'

export async function getTodList(): Promise<GetTodListResponse>  {
  return axios({
    url: `${url}/todoList`,
    method: "GET"
  }).then((res: AxiosResponse<GetTodListResponse>) => {
    const {data, status} = res;
    return data;
  });
}

export type Todo = {
  title: string,
  description: string,
  schedule: {
    start: string | null,
    end: string | null
  } | null
}

export type GetTodListResponse = Todo[]