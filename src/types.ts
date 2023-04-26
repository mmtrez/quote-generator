export interface Quote {
  quoteAuthor: string;
  quoteGenre: string;
  quoteText: string;
}

export enum Actions {
  PENDING = 'PENDING',
  RESOLVED = 'RESOLVED',
  REJECTED = 'REJECTED',
}

export interface State {
  isLoading: boolean;
  error: null | string;
  data: null | Quote[];
}
export interface Action {
  type: Actions;
  payload: State;
}
export interface Query {
  author?: string;
  genre?: string;
  query?: string;
  page?: number;
  limit?: number;
}

export interface ContextType extends State {
  run: (url: string, query?: Query | undefined) => Promise<void>;
}
