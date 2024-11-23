import { createContext, Dispatch, useContext } from 'react';
import { Theme } from '../types';

export type ThemeContextProps = [Theme, Dispatch<Theme>];

export const ThemeContext = createContext<ThemeContextProps>([
  'light',
  () => ''
]);

export const useThemeContext = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error(
      'useThemeContext has to be used within <ThemeContext.Provider>'
    );
  }
  return context;
};
