import { createContext, useState } from "react";

export const movieContext = createContext();

export const MovieProvider = ({ children }) => {
    const [movie, setMovie] = useState({});

    return (
        <movieContext.Provider value={{ movie, setMovie }}>
            {children}
        </movieContext.Provider>
    );
};