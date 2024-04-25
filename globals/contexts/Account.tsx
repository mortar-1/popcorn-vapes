import { createContext, useContext } from "react";
import { AccountContextProps } from '../globalTypes';

export const AccountContext = createContext<AccountContextProps>({
    account: undefined,
    setAccount: () => { }
});

export const useAccountContext = () => {
    const context = useContext(AccountContext);
    if (!context) {
        throw new Error(
            "useAccountContext has to be used within <AccountContext.Provider>"
        );
    }
    return context;
};
