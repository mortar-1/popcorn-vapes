import { createContext, Dispatch, useContext } from 'react';
import { Name } from '../types';

// export interface NameContextProps {
//   name: Name;
//   setName: Dispatch<Name>;
// }

export type NameContextProps = [Name, Dispatch<Name>];

// export const NameContext = createContext<NameContextProps>({
//   name: '',
//   setName: () => ''
// });

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
