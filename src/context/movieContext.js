import axios from 'axios';
import { createContext, useContext, useEffect, useState } from 'react';
import { LoginContext } from './loginContext';

export const MovieContext = createContext();

export const MovieProvider = ({ children }) => {
    const [movie, setMovie] = useState(() => {
        // Load movie data from sessionStorage on initial load
        const storedMovie = sessionStorage.getItem('movie');
        return storedMovie ? JSON.parse(storedMovie) : {};
    });
    const [category, setCategory] = useState('');
    const { apiUrl, userId } = useContext(LoginContext);

    useEffect(() => {
        // Save movie data to sessionStorage whenever it changes
        sessionStorage.setItem('movie', JSON.stringify(movie));
    }, [movie]);

    const handleAddToWishlist = async ( movieId ) => {
        try {
            const response = await axios.post(`${apiUrl}/api/wishlist`, {
                userId: userId,
                movieId: movieId,
            });

            if (response.status === 200) {
                alert('Added to Wishlist!');
            }

        } catch(err) {
            alert('Failed to add Wishlist!');
            console.log(userId);
            console.log(movieId);
        }
    }

    const contextValue = {
        movie,
        setMovie,
        category,
        setCategory,
        handleAddToWishlist
    }

    return <MovieContext.Provider value={contextValue}>{children}</MovieContext.Provider>;
};
