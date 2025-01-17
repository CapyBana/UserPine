import { React, useContext, useEffect, useRef, useState } from 'react';
import { InfoBlock, InfoLayout, MovieCard, MovieInfoCard, MovieList, MoviePageLayout, PPAL } from './MovieInfo.style';
import { Movie, MovieImg, MovieRating, MovieTitle, StarRating } from '~/components/ReviewForm/ReviewForm.style';
import { Link, useNavigate } from 'react-router-dom';
import ReturnBlock from '~/components/ReturnLink/Return';
import { ReviewPage } from '../Review/Review.style';
import { Image, MvDetail, MvRating } from '~/components/VerticalMvCard/VerticalMvCard.style';
import MovieOutlinedIcon from '@mui/icons-material/MovieOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import { MovieContext } from '~/context/movieContext';
import axios from 'axios';
import { LoginContext } from '~/context/loginContext';

// HorizontalMVCard Component
const HorizontalMVCard = ({ id, name, img, rating, item }) => {
    const { setMovie } = useContext(MovieContext);

    const handleMovieClick = () => {
        setMovie(item); // Update movie in context
    };

    return (
        <MovieCard>
            <Link
                to={`/movie/${id}`}
                style={{ width: '50%', float: 'left', cursor: 'pointer' }}
                onClick={handleMovieClick}
            >
                <Image style={{ width: 160, height: 230 }} src={img} alt="Movie Thumbnail" />
            </Link>
            <div style={{ flexDirection: 'column', float: 'right', marginLeft: 8 }}>
                <MvRating size="medium" name="rt" value={rating} precision={0.5} readOnly />
                <MvDetail>
                    <h1>{rating}</h1>
                    <h2>{name}</h2>
                </MvDetail>
            </div>
        </MovieCard>
    );
};

// MovieInfo Component
const MovieInfo = () => {
    const { apiUrl } = useContext(LoginContext);
    const { movie, handleAddToWishlist } = useContext(MovieContext);
    const [data, setData] = useState([]);
    const navigate = useNavigate();
    const [rating, setRating] = useState(0);
    // Navigate to Review Page
    const goToReview = () => {
        navigate('/review-post', { state: movie });
    };

    // Fetch Related Movies Based on Current Movie's Category
    useEffect(() => {
        if (!movie || !movie.category) return;

        const fetchData = async () => {
            try {
                const response = await axios.get(`${apiUrl}/api/movies/category/${movie.category.categoryName}`);
                setData(response.data.data);
            } catch (err) {
                console.error('Error fetching related movies:', err);
            }
        };

        fetchData();
    }, [apiUrl, movie]);

    if (!movie) {
        return <p>Loading movie details...</p>; // Fallback for when movie is not loaded
    }

    return (
        <ReviewPage>
            {/* Movie Info Layout */}
            <MoviePageLayout>
                {/* Back to Homepage */}
                <Link
                    to="/"
                    style={{
                        textDecoration: 'none',
                        width: '400px',
                        padding: '80px 2.5% 15px',
                    }}
                >
                    <ReturnBlock backmessage="Back to homepage" />
                </Link>
                <MovieInfoCard>
                    {movie.movieImg && (
                        <MovieImg src={`data:image/jpeg;base64,${movie.movieImg}`} alt="Movie Picture" />
                    )}
                    <Movie style={{ padding: '20px' }}>
                        <MovieRating>
                            <h4 style={{ marginRight: '30px' }}>{movie.movieRating}</h4>
                            <StarRating size="large" name="rt" value={movie.movieRating} precision={0.1} readOnly />
                        </MovieRating>
                        <MovieTitle>{movie.title}</MovieTitle>
                        <h5>
                            {movie.category?.categoryName.charAt(0).toUpperCase() +
                                movie.category?.categoryName.slice(1)}
                        </h5>
                    </Movie>
                </MovieInfoCard>

                <InfoLayout>
                    <InfoBlock>
                        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                            <div className="block" style={{ width: '48%', float: 'left' }}>
                                <h5>Give your own rating</h5>
                                <button onClick={goToReview}>
                                    <MvRating
                                        onChange={(event, newValue) => {
                                            setRating(newValue);
                                        }}
                                        size="medium"
                                        name="rt"
                                        value={rating}
                                        precision={0.5}
                                    />
                                </button>
                            </div>
                            <div className="block" style={{ width: '24%', float: 'right' }}>
                                <h5>Watch Trailer</h5>
                                <MovieOutlinedIcon fontSize="large" />
                            </div>
                            <div className="block" style={{ width: '24%', float: 'right' }}>
                                <h5>Add to Wishlist</h5>
                                <button className="heart" onClick={() => handleAddToWishlist(movie.id)}>
                                    <FavoriteBorderOutlinedIcon fontSize="large" />
                                </button>
                            </div>
                        </div>

                        {/* Movie Description */}
                        <div className="descriptionBlock" style={{ height: 'auto' }}>
                            <h2>Movie Description</h2>
                            <p>{movie.description}</p>
                        </div>
                    </InfoBlock>

                    {/* Related Movies */}
                    <PPAL>
                        <h3>People also like</h3>
                        <MovieList>
                            {data.map((item) => (
                                <HorizontalMVCard
                                    key={item.id}
                                    id={item.id}
                                    name={item.title}
                                    img={`data:image/jpeg;base64,${item.movieImg}`}
                                    rating={item.movieRating}
                                    item={item}
                                />
                            ))}
                        </MovieList>
                    </PPAL>
                </InfoLayout>
            </MoviePageLayout>
        </ReviewPage>
    );
};

export default MovieInfo;
