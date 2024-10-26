import { Link } from "react-router-dom";
import { MyMovieRatingBlock, MyMovieRatingTitler, Titler, MovieList, MovieListScroll } from "./myMovieRating.style";
import VerticalMvCard from "../VerticalMvCard/VerticalMvCard";
import React, { useState, useRef } from "react";
import ArrowCircleLeftIcon from '@mui/icons-material/ArrowCircleLeft';
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';
import { IconButton } from "@mui/material";

const ITEM_WIDTH = 196;

const MyMovieRating = () => {
    const [scrollPosition, setScrollPosition] = useState(0);

    const containerRef = useRef();

    const handleScroll = (scrollAmount) => {
        const newPosition = scrollPosition + scrollAmount;
        setScrollPosition(newPosition);
        if (containerRef.current) {
            containerRef.current.scroll({ left: newPosition });
        }
    }

    const sample = [
        { id: '1' },
        { id: '2' },
        { id: '3' },
        { id: '4' },
        { id: '5' },
        { id: '6' },
        { id: '7' },
        { id: '8' },
    ];

    return (
        <MyMovieRatingBlock>
            <MyMovieRatingTitler>
                <Titler />
                <div>MY MOVIE RATINGS</div>
                <Link to='/mymovieratings' style={{ 
                    textDecoration:'none', 
                    color:'#FAE6E5', 
                    marginLeft:'750px' 
                }}>
                    <div>View all</div>
                </Link>
            </MyMovieRatingTitler>
            <MovieListScroll>
                <IconButton 
                    onClick={() => {handleScroll(-ITEM_WIDTH)}}
                    style={{ marginRight: '20px', cursor:'pointer', color:'white' }}
                >
                    <ArrowCircleLeftIcon />
                </IconButton>
                <MovieList ref={containerRef} style={{ gap:'20px' }}>
                    {sample.map(() => (
                        <VerticalMvCard />
                    ))}
                </MovieList>
                <IconButton
                    onClick={() => {handleScroll(ITEM_WIDTH)}}
                    style={{ marginLeft: '20px', cursor:'pointer', color:'white' }}
                >
                    <ArrowCircleRightIcon />
                </IconButton>
            </MovieListScroll>
        </MyMovieRatingBlock>
    );
}

export default MyMovieRating;