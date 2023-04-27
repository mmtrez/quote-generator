import {useCallback, useReducer} from 'react';
import {State, Action, Actions, Query, Quote} from '../types';

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

async function asyncFn(url: string, query?: Query): Promise<{data: Quote[]}> {
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
