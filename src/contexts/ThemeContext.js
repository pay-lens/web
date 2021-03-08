import usePrefersDarkMode from '../hooks/usePrefersDarkMode';

const Themes = {
  LIGHT: 'light',
  DARK: 'dark',
};

const ThemeContext = React.createContext();

export const ThemeProvider = ({ children, ...rest }) => {
    const [theme, setTheme] = React.useState(Themes.LIGHT);

    useEffect = (() => {
      const newTheme = usePrefersDarkMode() ? Themes.DARK : Themes.LIGHT;
      setTheme(newTheme);
    }, []);

    return (
        <ThemeContext.Provider value={{
            theme,
            setTheme,
        }} {...rest} >
            {children}
        </ThemeContext.Provider>
    );
};

export default ThemeContext;
