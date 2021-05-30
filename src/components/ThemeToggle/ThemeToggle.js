import React, { useContext } from 'react';
import { ThemeContext } from '../../themes/themeContext';

const ThemeToggle = () => {
  const { theme, setTheme } = useContext(ThemeContext);

  function isDark() {
    return theme === 'dark';
  }

  return (
    <label>
      <input
        type="checkbox"
        checked={isDark()}
        onChange={(e) => setTheme(e.target.checked ? 'dark' : 'light')}
      ></input>
      Dark Mode
    </label>
  );
};

export default ThemeToggle;
