import {useCallback, useReducer} from 'react';
import {Quote} from './types';
enum Actions {
  PENDING = 'PENDING',
  RESOLVED = 'RESOLVED',
  REJECTED = 'REJECTED',
}
interface State {
  isLoading: boolean;
  error: null | string;
  data: null | Quote[];
}
interface Action {
  type: Actions;
  payload: State;
}
interface Query {
  author?: string;
  genre?: string;
  query?: string;
  page?: number;
  limit?: number;
}
const initialState: State = {isLoading: false, error: null, data: null};

function reducer(state: State, action: Action): State {
  console.log(state);
  switch (action.type) {
    case Actions.PENDING:
      return {isLoading: true, error: null, data: null};
    case Actions.RESOLVED:
      return {isLoading: false, data: action.payload.data, error: null};
    case Actions.REJECTED:
      return {isLoading: false, error: action.payload.error, data: null};
  }
}

async function asyncFn(url: string, query?: Query): Promise<any> {
  const base = 'https://quote-garden.onrender.com/api/v3';
  const data = await fetch(base + url, query as RequestInit);
  return await data.json();
}

export default function useAsync() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const run = useCallback(async (url: string, query?: Query) => {
    try {
      dispatch({
        type: Actions.PENDING,
        payload: {isLoading: true, error: null, data: null},
      });
      const {data} = await asyncFn(url, query);
      dispatch({
        type: Actions.RESOLVED,
        payload: {isLoading: false, error: null, data: data},
      });
    } catch (err) {
      let message = 'Unknown error.';
      if (err instanceof Error) message = err.message;
      dispatch({
        type: Actions.REJECTED,
        payload: {isLoading: false, error: message, data: null},
      });
      throw new Error(`Error: ${message}`);
    }
  }, []);

  return {...state, run};
}
