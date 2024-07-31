import { createContext, Dispatch, useContext } from 'react';
import { Account } from '../types';

// export interface AccountContextProps {
//   account: Account;
//   setAccount: Dispatch<Account>;
// }

export type AccountContextProps = [Account, Dispatch<Account>];

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
