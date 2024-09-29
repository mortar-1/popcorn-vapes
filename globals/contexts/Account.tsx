import { createContext, Dispatch, useContext } from 'react';
import { User } from '../types';

// export interface AccountContextProps {
//   account: Account;
//   setAccount: Dispatch<Account>;
// }

export type AccountContextProps = [User, Dispatch<User>];

// export const AccountContext = createContext<AccountContextProps>({
//   account: undefined,
//   setAccount: () => {}
// });

export const AccountContext = createContext<AccountContextProps>([
  undefined,
  () => {}
]);

export const useAccountContext = () => {
  const context = useContext(AccountContext);
  if (!context) {
    throw new Error(
      'useAccountContext has to be used within <AccountContext.Provider>'
    );
  }
  return context;
};
