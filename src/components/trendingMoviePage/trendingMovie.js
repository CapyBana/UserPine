import React from 'react';
import {
    Body,
    Container,
    TopMovies,
    Background,
    PosterWrapper,
    MoviePoster,
    MovieInfo,
    MovieDescription,
    MovieTitle,
} from './trendingMovie.style';
import TrendingPoster from 'src/assets/images/image.png';

const TrendingMovie = (props) => {
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
