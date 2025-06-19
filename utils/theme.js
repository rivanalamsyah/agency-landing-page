const ThemeContext = React.createContext();

function ThemeProvider({ children }) {
  try {
    const isDark = true; // Force dark mode only for Phase 1
    
    React.useEffect(() => {
      document.documentElement.setAttribute('data-theme', 'dark');
      document.body.style.background = '#0a0a1a';
    }, []);

    return React.createElement(ThemeContext.Provider, {
      value: { isDark, toggleTheme: () => {} }
    }, children);
  } catch (error) {
    console.error('ThemeProvider error:', error);
    reportError(error);
  }
}

function useTheme() {
  const context = React.useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within ThemeProvider');
  }
  return context;
}
