'use client';

import { useState } from 'react';
import { AgeContext } from './Age';
import { User, Age, Name } from '../types';
import { UserContext } from './User';
import { ThemeProvider } from '@mui/material';
import theme from '../themes/theme';
import { RootProps } from '@/app/layout';
import { AppRouterCacheProvider } from '@mui/material-nextjs/v13-appRouter';
import { NameContext } from './Name';

const Providers = ({ children }: RootProps) => {
  const [age, setAge] = useState<Age>(0);
  const [user, setUser] = useState<User>(undefined);
  const [name, setName] = useState<Name>('');
  return (
    <>
      <AppRouterCacheProvider>
        <ThemeProvider theme={theme}>
          <AgeContext.Provider value={{ age, setAge }}>
            <UserContext.Provider value={[user, setUser]}>
              <NameContext.Provider value={[name, setName]}>
                {children}
              </NameContext.Provider>
            </UserContext.Provider>
          </AgeContext.Provider>
        </ThemeProvider>
      </AppRouterCacheProvider>
    </>
  );
};

export default Providers;
