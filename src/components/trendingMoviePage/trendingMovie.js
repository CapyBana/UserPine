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
import TrendingPoster from 'src/assets/images/trending.jpg';
import Poster from 'src/assets/images/poster.png';

const TrendingMovie = () => {
    return (
        <Body>
            <Container>
                <TopMovies>
                    <Background src={TrendingPoster} />
                    <PosterWrapper>
                        <MoviePoster src={Poster} alt="Inside Out 2" />
                        <MovieInfo>
                            <CategoryHeader>Top Movies</CategoryHeader>
                            <MovieTitle>Movie Name</MovieTitle>
                            <MovieDescription>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Rhoncus volutpat elit cubilia
                                posuere. Nec proin eu viverra habitasse gravida fermentum, tempus consequat commodo.
                            </MovieDescription>
                        </MovieInfo>
                    </PosterWrapper>
                </TopMovies>
            </Container>
        </Body>
    );
};

export default TrendingMovie;
