import { createContext, useContext, useState, useEffect } from "react";

const AppContext = createContext();

const getMode = () => {
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  const storedMode = localStorage.getItem('darkTheme');
  return storedMode !== null ? JSON.parse(storedMode) : prefersDark;
};

export const AppProvider = ({ children }) => {
  const [isDark, setIsDark] = useState(getMode());


  const toggleDark = () => {
    const newDarkTheme = !isDark;
    setIsDark(newDarkTheme);
    localStorage.setItem('darkTheme', JSON.stringify(newDarkTheme));
    
  };

  useEffect(() => {
    document.body.classList.toggle('dark-theme', isDark);
  }, [isDark]);

  return (
    <AppContext.Provider value={{ isDark, toggleDark}}>
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => useContext(AppContext);
