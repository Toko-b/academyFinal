import { createContext, useContext, useState } from "react";

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState('light')
  const clickHandler=()=>{
    setTheme(prev => prev==='light'?"dark":'light')
  }

  return <ThemeContext.Provider value={{theme, clickHandler}}>{children}</ThemeContext.Provider>;
};

export function useTheme() {
  return useContext(ThemeContext);
}
