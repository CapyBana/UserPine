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
                          Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                          Rhoncus volutpat elit cubilia posuere. Nec proin eu viverra 
                          habitasse gravida fermentum, tempus consequat commodo.
                          </MovieDescription>
                      </MovieInfo>
                    </PosterWrapper>
                </TopMovies>

                <MoviesSection>
                    <SectionTitle>New Movies</SectionTitle>
                    <MoviesGrid>
                        <MovieCard>
                            <Placeholder />
                            <Rating>⭐ 3.0 Movie Name</Rating>
                        </MovieCard>
                        <MovieCard>
                            <Placeholder />
                            <Rating>⭐ 4.5 Movie Name</Rating>
                        </MovieCard>
                        <MovieCard>
                            <Placeholder />
                            <Rating>⭐ 2.2 Movie Name</Rating>
                        </MovieCard>
                        <MovieCard>
                            <Placeholder />
                            <Rating>⭐ 5.0 Movie Name</Rating>
                        </MovieCard>
                    </MoviesGrid>
                </MoviesSection>

                <MoviesSection>
                    <SectionTitle>Top Rated Movies</SectionTitle>
                    <MoviesGrid>
                        <MovieCard>
                            <Placeholder />
                            <Rating>⭐ 4.8 Movie Name</Rating>
                        </MovieCard>
                        <MovieCard>
                            <Placeholder />
                            <Rating>⭐ 4.7 Movie Name</Rating>
                        </MovieCard>
                        <MovieCard>
                            <Placeholder />
                            <Rating>⭐ 4.6 Movie Name</Rating>
                        </MovieCard>
                        <MovieCard>
                            <Placeholder />
                            <Rating>⭐ 4.5 Movie Name</Rating>
                        </MovieCard>
                    </MoviesGrid>
                </MoviesSection>
            </Container>
        </Body>
    );
};

export default TrendingMovie;
