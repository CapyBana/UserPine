import { createContext, useEffect, useState } from "react";

export const LoginContext = createContext();

export const LoginProvider = ({ children }) => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const apiUrl = process.env.REACT_APP_API_URL;

    useEffect(() => {
        // Check if user is logged in on component mount
        const storedLogin = sessionStorage.getItem('isLoggedIn');
        if (storedLogin === 'true') {
            setIsLoggedIn(true);
        }
    }, []);

    const login = () => {
        setIsLoggedIn(true);
        sessionStorage.setItem('isLoggedIn', 'true');
    };

    const logout = () => {
        setIsLoggedIn(false);
        sessionStorage.removeItem('isLoggedIn');
    };

    return (
        <LoginContext.Provider value={{ isLoggedIn, login, logout, apiUrl }}>
            {children}
        </LoginContext.Provider>
    );
};