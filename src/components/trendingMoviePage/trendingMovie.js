import React from 'react';
import {
    Body,
    Container,
    TopMovies,
    Background,
    PosterWrapper,
    MoviePoster,
    MovieInfo,
    CategoryHeader,
    MovieDescription,
    MovieTitle,
    MoviesSection,
    SectionTitle,
    MoviesGrid,
    MovieCard,
    Placeholder,
    Rating,
} from './trendingMovie.style';
import TrendingPoster from 'src/assets/images/image.png';
import Poster from 'src/assets/images/poster.png';

const TrendingMovie = (props) => {
    console.log(props.data);
    return (
        <Body>
            <Container>
                <TopMovies>
                    <Background src={TrendingPoster} />
                    <PosterWrapper>
                        <MoviePoster src={`data:image/jpeg;base64, ${props.data.movieImg}`} alt="Img" />
                        <MovieInfo>
                            <MovieTitle>{props.data.title}</MovieTitle>
                            <MovieDescription>{props.data.description}</MovieDescription>
                        </MovieInfo>
                    </PosterWrapper>
                </TopMovies>
            </Container>
        </Body>
    );
};

export default TrendingMovie;
