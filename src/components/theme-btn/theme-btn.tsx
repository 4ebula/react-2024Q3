import React, { useContext } from 'react';
import { ThemeContext } from '../../theme/theme';
import { Themes } from '../../theme/themes.enum';
import './theme-btn.scss';


export function ThemeBtnComponent(): React.ReactNode {
  const { theme, setTheme } = useContext(ThemeContext);

  const toggleTheme = () => {
    if (theme === Themes.Light) {
      return setTheme(Themes.Dark)
    }

    if (theme === Themes.Dark) {
      return setTheme(Themes.Light);
    }
  };

  return (
    <div className="theme-btn">
      <button onClick={toggleTheme} className={theme}>Change theme</button>
    </div>
  );
}
