import { createContext, useContext } from "react";
import { NameContextProps } from "../globalTypes";

export const NameContext = createContext<NameContextProps>({
  name: "",
  setName: () => {},
});

export const useNameContext = () => {
  const context = useContext(NameContext);
  if (!context) {
    throw new Error(
      "useNameContext has to be used within <NameContext.Provider>"
    );
  }
  return context;
};
