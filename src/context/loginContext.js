import { createContext, useEffect, useState } from "react";

export const LoginContext = createContext();

export const LoginProvider = ({ children }) => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [userId, setUserId] = useState(null);
    const apiUrl = process.env.REACT_APP_API_URL;

    useEffect(() => {
        // Load login state and userId from sessionStorage on component mount
        const storedLogin = sessionStorage.getItem('isLoggedIn');
        const storedUserId = sessionStorage.getItem('userId');

        if (storedLogin === 'true' && storedUserId) {
            setIsLoggedIn(true);
            setUserId(storedUserId);
        }
    }, []);

    const login = (userId) => {
        setIsLoggedIn(true);
        setUserId(userId);
        sessionStorage.setItem('isLoggedIn', 'true');
        sessionStorage.setItem('userId', userId); // Persist userId
        window.location.reload();
    };

    const logout = () => {
        setIsLoggedIn(false);
        setUserId(null);
        sessionStorage.removeItem('isLoggedIn');
        sessionStorage.removeItem('userId'); // Clear userId
        window.location.reload();
    };

    const contextValue = {
        isLoggedIn,
        login,
        logout,
        apiUrl,
        userId,
    };

    return (
        <LoginContext.Provider value={contextValue}>
            {children}
        </LoginContext.Provider>
    );
};