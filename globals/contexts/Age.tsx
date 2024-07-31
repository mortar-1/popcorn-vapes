import { createContext, Dispatch, useContext } from 'react';
import { Age } from '../types';

export interface AgeContextProps {
  age: Age;
  setAge: Dispatch<Age>;
}

export const AgeContext = createContext<AgeContextProps>({
  age: 0,
  setAge: () => 0
});

export const useAgeContext = () => {
  const context = useContext(AgeContext);
  if (!context) {
    throw new Error(
      'useAgeContext has to be used within <AgeContext.Provider>'
    );
  }
  return context;
};
