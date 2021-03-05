import React from 'react';

const ThemeContext = React.createContext();

export const ThemeProvider = ({ children, ...rest }) => {
    const [Theme, setTheme] = React.useState();

    return (
        <ThemeContext.Provider value={{
            Theme,
            setTheme,
        }} {...rest} >
            {children}
        </ThemeContext.Provider>
    );
};

export default ThemeContext;
