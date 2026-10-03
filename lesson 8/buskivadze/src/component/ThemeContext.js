import { createContext, useContext, useState } from "react";

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [language, setLanguage] = useState("georgian");
  const changeHandler = () => {
    setLanguage(language==="georgian"?"english":"georgian")
  }
  return (
    <ThemeContext.Provider value={{language, changeHandler}}>{children}</ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);
