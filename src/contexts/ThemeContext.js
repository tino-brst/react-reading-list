import React, { createContext, useState, useContext } from 'react';
import { Theme } from '../constants'

const ThemeContext = createContext();
ThemeContext.displayName = 'ThemeContext';

const ThemeProvider = ({ children, initialValue = Theme.light }) => {
  const [theme, setTheme] = useState(initialValue);

  return (
    <ThemeContext.Provider value={[theme, setTheme]}>
      {children}
    </ThemeContext.Provider>
  )
}

const useTheme = () => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider')
  }
  return context;
}

export {
  ThemeProvider,
  useTheme,
};