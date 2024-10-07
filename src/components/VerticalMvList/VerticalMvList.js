import React, { useRef, useState } from 'react';
import { MovieList, MovieListContainer, Navigator } from './VerticalMvList.style';
import VerticalMvCard from '../VerticalMvCard/VerticalMvCard';
const VerticalMvList = () => {
    const [count, setCount] = useState(0);
    const movieListRef = useRef(null);

    const scrollRight = () => {
        const movieListElement = movieListRef.current;
        if (movieListElement) {
            movieListElement.scrollBy({ left: 176 + 16, behavior: 'smooth' });
        }
        const addingMovie = movieListElement.children[count].cloneNode(true);
        movieListElement.appendChild(addingMovie);
        setCount((prevCount) => (prevCount + 1) % 8);
    };
    return (
        <MovieListContainer>
            <h3>Top Movie</h3>
            <div>
                <MovieList ref={movieListRef}>
                    <VerticalMvCard name="Movie No1" />
                    <VerticalMvCard name="Movie No2" />
                    <VerticalMvCard name="Movie No3" />
                    <VerticalMvCard name="Movie No4" />
                    <VerticalMvCard name="Movie No5" />
                    <VerticalMvCard name="Movie No6" />
                    <VerticalMvCard name="Movie No7" />
                    <VerticalMvCard name="Movie No8" />
                </MovieList>
                <Navigator
                    onClick={() => {
                        scrollRight();
                    }}
                />
            </div>
        </MovieListContainer>
    );
};

export default VerticalMvList;
