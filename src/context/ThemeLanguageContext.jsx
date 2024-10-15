import React, { createContext, useState, useContext } from 'react';

const ThemeLanguageContext = createContext();

export const useThemeLanguage = () => useContext(ThemeLanguageContext);

export const ThemeLanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState('english'); 
  const [isDarkMode, setIsDarkMode] = useState(false); 
  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };
  const handleLanguageChange = (event) => {
    setLanguage(event.target.value);
  };
  return (
    <ThemeLanguageContext.Provider
      value={{ language, setLanguage, isDarkMode, toggleTheme, handleLanguageChange }}
    >
      {children}
    </ThemeLanguageContext.Provider>
  );
};
