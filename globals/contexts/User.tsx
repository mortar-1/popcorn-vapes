import { createContext, Dispatch, useContext } from 'react';
import { User } from '../types';

export type UerContextProps = [User, Dispatch<User>];

export const UserContext = createContext<UerContextProps>([
  undefined,
  () => {}
]);

export const useUserContext = () => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error(
      'useUserContext has to be used within <UserContext.Provider>'
    );
  }
  return context;
};
