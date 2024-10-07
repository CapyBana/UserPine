import React, { useRef } from 'react';
import { MovieList, MovieListContainer, Navigator } from './VerticalMvList.style';
import VerticalMvCard from '../VerticalMvCard/VerticalMvCard';
const VerticalMvList = () => {
    const movieListRef = useRef(null);

    const scrollRight = () => {
        if (movieListRef.current) {
            movieListRef.current.scrollBy({ left: 176, behavior: 'smooth' });
        }
    };
    return (
        <MovieListContainer>
            <h3>Top Movie</h3>
            <div>
                <MovieList ref={movieListRef}>
                    <VerticalMvCard />
                    <VerticalMvCard />
                    <VerticalMvCard />
                    <VerticalMvCard />
                    <VerticalMvCard />
                    <VerticalMvCard />
                    <VerticalMvCard />
                </MovieList>
                <Navigator onClick={scrollRight} />
            </div>
        </MovieListContainer>
    );
};

export default VerticalMvList;
