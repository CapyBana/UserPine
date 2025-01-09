import React, { useRef, useState } from 'react';
import { MovieList, MovieListContainer, Navigator } from './VerticalMvList.style';
import VerticalMvCard from '../VerticalMvCard/VerticalMvCard';

const VerticalMvList = (props) => {
    const movieListRef = useRef(null);
    const [mvList, setMvList] = useState(props.data);
    const scrollRight = () => {
        const movieListElement = movieListRef.current;
        if (movieListElement) {
            movieListElement.scrollBy({ left: 176 + 16, behavior: 'smooth' });
        }
        setMvList((prevList) => {
            const nextMovie = prevList[0];
            return [...prevList.slice(1), nextMovie];
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
                                rating={movie.movieRating}
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
