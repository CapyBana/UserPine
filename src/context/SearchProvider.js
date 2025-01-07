import React, { createContext, useState } from 'react';

// 1. Create the Context
export const SearchContext = createContext();

// 2. Create a provider component
export const SearchProvider = ({ children }) => {
    const [inputValue, setInputValue] = useState('');

    return <SearchContext.Provider value={{ inputValue, setInputValue }}>{children}</SearchContext.Provider>;
};
