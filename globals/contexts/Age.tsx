import { createContext, useContext } from "react";
import { AgeProps } from '../globalTypes';

export const AgeContext = createContext<AgeProps>({ age: 0 });

export const useAgeContext = () => {
    const context = useContext(AgeContext);
    if (!context) {
        throw new Error(
            "useAgeContext has to be used within <AgeContext.Provider>"
        );
    }
    return context;
};
