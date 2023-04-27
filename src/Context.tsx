import {createContext, ReactNode} from 'react';
import useAsync from './hooks/useAsync';
import {ContextType} from './types';

const Context = createContext<ContextType>({} as ContextType);

export function ContextProvider({children}: {children: ReactNode}) {
  const {isLoading, data, error, run} = useAsync();
  return (
    <Context.Provider value={{isLoading, data, error, run}}>
      {children}
    </Context.Provider>
  );
}
export default Context;
