import { createContext, Dispatch } from 'react';
import { Themes } from './themes.enum';

interface ThemeContextvalue {
  theme: Themes;
  setTheme: Dispatch<React.SetStateAction<Themes>>;
}


export const ThemeContext = createContext<ThemeContextvalue>({
  theme: Themes.Light,
  setTheme: () => {},
});
