// import React from 'react';
import { ThemeLanguageProvider } from './context/ThemeLanguageContext'; // Providerni import qilish
import Home from './pages/Home';

function App() {
  return (
    <ThemeLanguageProvider>
      <Home />
    </ThemeLanguageProvider>
  );
}

export default App;
