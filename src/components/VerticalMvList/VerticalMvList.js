import React, { useRef, useState } from 'react';
import { MovieList, MovieListContainer, Navigator } from './VerticalMvList.style';
import VerticalMvCard from '../VerticalMvCard/VerticalMvCard';

const VerticalMvList = (props) => {
    //const [count, setCount] = useState(0);
    const movieListRef = useRef(null);
    const [mvList, setMvList] = useState(props.data);
    const scrollRight = () => {
        const movieListElement = movieListRef.current;
        if (movieListElement) {
            // Scroll the movie list container
            movieListElement.scrollBy({ left: 176 + 16, behavior: 'smooth' });
        }

        // Clone the first movie and add it to the end of the list
        setMvList((prevList) => {
            const nextMovie = prevList[0]; // Take the first movie
            return [...prevList.slice(1), nextMovie]; // Rotate the list
        });
    };

    return (
        <MovieListContainer>
            <h3>{props.title}</h3>
            <div>
                <MovieList ref={movieListRef}>
                    {Array.isArray(mvList) &&
                        mvList.map((movie) => (
                            <VerticalMvCard
                                key={movie.id}
                                id={movie.id}
                                name={movie.title}
                                rating={movie.rating}
                                img={`data:image/jpeg;base64,${movie.movieImg}`}
                                $movie={movie}
                            />
                        ))}
                </MovieList>
                <Navigator onClick={scrollRight} />
            </div>
        </MovieListContainer>
    );
};

export default VerticalMvList;
