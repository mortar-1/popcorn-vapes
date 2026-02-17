import { createContext, Dispatch, useContext } from 'react';
import { NameContextProps } from '../types';

export const NameContext = createContext<NameContextProps>(['', () => '']);

export const useNameContext = () => {
  const context = useContext(NameContext);
  if (!context) {
    throw new Error(
      'useNameContext has to be used within <NameContext.Provider>'
    );
  }
  return context;
};
