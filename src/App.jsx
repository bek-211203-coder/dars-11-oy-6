
import { ThemeLanguageProvider } from './context/ThemeLanguageContext';
import Home from './pages/Home';

function App() {
  return (
    <ThemeLanguageProvider>
      <Home />
    </ThemeLanguageProvider>
  );
}

export default App;
