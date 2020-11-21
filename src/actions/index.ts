import axios from 'axios';
import { Dispatch } from 'redux';
import { ActionTypes } from './types';

interface FetchTodosAction {
  type: ActionTypes.fetchTodos;
  payload: Todo[];
}

interface Todo {
  id: number;
  title: string;
  completed: boolean;
}

const url = 'https://jsonplaceholder.typicode.com/todos';

export const fetchTodos = () => {
  return async (dispatch: Dispatch) => {
    const response = await axios.get<Todo[]>(url);

    dispatch<FetchTodosAction>({
      type: ActionTypes.fetchTodos,
      payload: response.data,
    });
  };
};
