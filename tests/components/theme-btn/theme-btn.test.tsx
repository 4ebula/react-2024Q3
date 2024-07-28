import './theme-btn.scss';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import { ThemeContext } from '../../../src/contexts/theme';
import { Themes } from '../../../src/contexts/themes.enum';
import { ThemeBtnComponent } from '../../../src/components/theme-btn/theme-btn';

describe('Theme button', () => {
  test('should render', () => {
    const { container } = render(
      <ThemeContext.Provider value={{ theme: Themes.Light, setTheme: () => {}}}>
        <ThemeBtnComponent />
      </ThemeContext.Provider>,
    );
    const div = container.querySelector('.theme-btn');
    expect(div).toBeInTheDocument();
  });

  test('should trigger theme change', () => {
    const setTheme = jest.fn();
    const { container } = render(
      <ThemeContext.Provider value={{ theme: Themes.Light, setTheme }}>
        <ThemeBtnComponent />
      </ThemeContext.Provider>,
    );
    const btn = container.querySelector('.theme-btn')?.querySelector('button');
    btn?.click();

    expect(setTheme).toHaveBeenCalledWith(Themes.Dark);
  });
});