"use client";

import { useState } from "react";
import { AgeContext } from "./Age";
import { Account, AgeProps, Name } from "../globalTypes";
import { AccountContext } from "./Account";
import { ThemeProvider } from "@mui/material";
import theme from "../themes/theme";
import { RootProps } from "@/app/layout";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v13-appRouter";
import { NameContext } from "./Name";

const Providers = ({ children }: RootProps) => {
  const [age, setAge] = useState<AgeProps>({ age: 0 });
  const [account, setAccount] = useState<Account>(undefined);
  const [name, setName] = useState<Name>("");
  return (
    <>
      <AppRouterCacheProvider>
        <ThemeProvider theme={theme}>
          <AgeContext.Provider value={age}>
            <AccountContext.Provider value={{ account, setAccount }}>
              <NameContext.Provider value={{ name, setName }} />
              {children}
            </AccountContext.Provider>
          </AgeContext.Provider>
        </ThemeProvider>
      </AppRouterCacheProvider>
    </>
  );
};

export default Providers;
