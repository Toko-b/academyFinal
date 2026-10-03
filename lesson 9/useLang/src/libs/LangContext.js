import { createContext, useContext, useState } from "react";
const lang = {
  ka: {
    welcome: "გამარჯობ",
    btn: "დააჭირე",
  },
  en: {
    welcome: "hello",
    btn: "click it",
  },
};
const LangContext = createContext();
export const LangProvider = ({ children }) => {
  let savedLanguage=localStorage.getItem("language") || "ka"
  const [language, setLanguage] = useState(savedLanguage);
  const LangChange = (lang) => {
    setLanguage(lang);
    localStorage.setItem("language", lang);
  };
  const t = lang[language];
  return (
    <LangContext.Provider value={{ language, LangChange, t }}>
      {children}
    </LangContext.Provider>
  );
};

export const useLang = () => useContext(LangContext);
