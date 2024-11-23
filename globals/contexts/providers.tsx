'use client';

import { createTheme, ThemeProvider } from '@mui/material';
import { AppRouterCacheProvider } from '@mui/material-nextjs/v13-appRouter';
import CssBaseline from '@mui/material/CssBaseline';

import { User, Age, Name, Theme } from '../types';
import { useMemo, useState } from 'react';
import { AgeContext } from './Age';
import { UserContext } from './User';
import { ThemeContext } from './Theme';

// import theme from '../themes/theme';
import { getDesignTokens } from '../themes/getDesignTokens';
import { RootProps } from '@/app/layout';

import { NameContext } from './Name';

const Providers = ({ children }: RootProps) => {
  const [mode, setMode] = useState<Theme>('light');
  const theme = useMemo(() => {
    return createTheme(getDesignTokens(mode));
  }, [mode]);

  const [age, setAge] = useState<Age>(0);
  const [user, setUser] = useState<User>(undefined);
  const [name, setName] = useState<Name>('');
  return (
    <>
      <AppRouterCacheProvider>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <ThemeContext.Provider value={[mode, setMode]}>
            <AgeContext.Provider value={{ age, setAge }}>
              <UserContext.Provider value={[user, setUser]}>
                <NameContext.Provider value={[name, setName]}>
                  {children}
                </NameContext.Provider>
              </UserContext.Provider>
            </AgeContext.Provider>
          </ThemeContext.Provider>
        </ThemeProvider>
      </AppRouterCacheProvider>
    </>
  );
};

export default Providers;
