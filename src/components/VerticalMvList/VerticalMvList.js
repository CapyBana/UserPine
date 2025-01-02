import React, { useRef, useState } from 'react';
import { MovieList, MovieListContainer, Navigator } from './VerticalMvList.style';
import VerticalMvCard from '../VerticalMvCard/VerticalMvCard';

const VerticalMvList = (props) => {
    const [count, setCount] = useState(0);
    const movieListRef = useRef(null);
    const mvList = props.data;
    const scrollRight = () => {
        const movieListElement = movieListRef.current;
        if (movieListElement) {
            movieListElement.scrollBy({ left: 176 + 16, behavior: 'smooth' });
        }
        const addingMovie = movieListElement.children[count].cloneNode(true);
        movieListElement.appendChild(addingMovie);
        setCount((prevCount) => (prevCount + 1) % mvList.length);
    };

    return (
        <MovieListContainer>
            <h3>{props.title}</h3>
            <div>
                <MovieList ref={movieListRef}>
                    {mvList.map((movie, index) => (
                        <VerticalMvCard key={index} name={movie.name} rating={movie.rating} img={movie.img} />
                    ))}
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
