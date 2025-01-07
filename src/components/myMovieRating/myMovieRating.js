import { Link } from 'react-router-dom';
import { MyMovieRatingBlock, MyMovieRatingTitler, Titler, MovieList, MovieListScroll } from './myMovieRating.style';
import React, { useState, useRef, useEffect, useContext } from 'react';
import ArrowCircleLeftIcon from '@mui/icons-material/ArrowCircleLeft';
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';
import { IconButton } from '@mui/material';
import VerticalMvCard from '../VerticalMvCard/VerticalMvCard';
import axios from 'axios';
import { LoginContext } from '~/context/loginContext';

const ITEM_WIDTH = 196;

const MyMovieRating = () => {
    const { apiUrl, userId } = useContext(LoginContext);
    const [wishlist, setWishlist] = useState([]);
    const [isLoad, setIsLoad] = useState(false);
    const [error, setError] = useState(null);
    const [scrollPosition, setScrollPosition] = useState(0);
    const containerRef = useRef();

    const handleScroll = (scrollAmount) => {
        const newPosition = scrollPosition + scrollAmount;
        setScrollPosition(newPosition);
        if (containerRef.current) {
            containerRef.current.scroll({ left: newPosition });
        }
    };

    useEffect(() => {
        const fetchWishlist = async () => {
            try {
                setIsLoad(true);
                if (!userId) {
                    setIsLoad(false); // Stop loading if user is not logged in
                    return;
                }
                const response = await axios.get(`${apiUrl}/api/wishlist/${userId}`);
                if (response.status === 200) {
                    setWishlist(response.data.data.movies);
                }
            } catch (err) {
                setError(err);
            } finally {
                setIsLoad(false); // Ensure loading stops regardless of success or failure
            }
        };

        fetchWishlist();
    }, [apiUrl, userId]);

    return (
        <MyMovieRatingBlock>
            <MyMovieRatingTitler>
                <Titler />
                <div>MY MOVIE RATINGS</div>
            </MyMovieRatingTitler>
            <MovieListScroll>
                <IconButton
                    onClick={() => {
                        handleScroll(-ITEM_WIDTH);
                    }}
                    style={{ marginRight: '20px', cursor: 'pointer', color: 'white' }}
                >
                    <ArrowCircleLeftIcon />
                </IconButton>
                <MovieList ref={containerRef} style={{ gap: '20px' }}>
                    {wishlist.map((movie) => (
                        <VerticalMvCard
                            style={{ backgroundColor: 'inherit !important' }}
                            key={movie.id}
                            id={movie.id}
                            name={movie.title}
                            rating={movie.rating}
                            img={movie.img}
                            $movie={movie}
                        />
                    ))}
                    {isLoad && <div>Loading...</div>}
                    {error && <div>Error: {error.message}</div>}
                </MovieList>
                <IconButton
                    onClick={() => {
                        handleScroll(ITEM_WIDTH);
                    }}
                    style={{ marginLeft: '20px', cursor: 'pointer', color: 'white' }}
                >
                    <ArrowCircleRightIcon />
                </IconButton>
            </MovieListScroll>
        </MyMovieRatingBlock>
    );
};

export default MyMovieRating;
