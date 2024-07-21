import React, { useState } from 'react';
import { RouterProvider } from 'react-router-dom';
import { router } from './Router.tsx';
import { ThemeContext } from './theme/theme.tsx';
import { Themes } from './theme/themes.enum.ts';
import './App.scss';

export function App(): React.ReactNode {
  const [theme, setTheme] = useState(Themes.Light);

  return (
    <div className={`app ${theme}`}>
      <ThemeContext.Provider value={{ theme, setTheme }}>
        <RouterProvider router={router} />
      </ThemeContext.Provider>
    </div>
  );
}
