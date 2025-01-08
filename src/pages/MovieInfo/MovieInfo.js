import { React, useContext, useEffect, useRef, useState } from 'react';
import { InfoBlock, InfoLayout, MovieCard, MovieInfoCard, MovieList, MoviePageLayout, PPAL } from './MovieInfo.style';
import { Movie, MovieImg, MovieRating, MovieTitle, StarRating } from '~/components/ReviewForm/ReviewForm.style';
import naruto from 'src/assets/images/naruto.png';
import { Link, useNavigate } from "react-router-dom";
import ReturnBlock from "~/components/ReturnLink/Return";
import { ReviewPage } from "../Review/Review.style";
import Img from 'src/assets/images/naruto.png';
import { Image, MvDetail, MvRating } from '~/components/VerticalMvCard/VerticalMvCard.style';
import MovieOutlinedIcon from '@mui/icons-material/MovieOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import { MovieContext } from "~/context/movieContext";
import axios from 'axios';

const HorizontalMVCard = (props) => {
    const [rating] = useState(4.5);
    return (
        <MovieCard>
            <Link to="/review-post" style={{ width: '50%', float: 'left' }}>
                <Image src={props.img} alt="Movie Thumbnail" />
            </Link>
            <div style={{ flexDirection: 'column', float: 'right' }}>
                <MvRating size="medium" name="rt" value={rating} precision={0.5} readOnly />
                <MvDetail>
                    <h1>{rating}</h1>
                    <h2>{props.name}</h2>
                </MvDetail>
            </div>
        </MovieCard>
    );
};

const MovieInfo = () => {
    const apiUrl = process.env.REACT_APP_API_URL;
    const [rating, setRating] = useState(4.5);
    const { movie, handleAddToWishlist } = useContext(MovieContext);
    const [data, setData] = useState([]);
    const movieListRef = useRef(null);
    const navigate = useNavigate();

    const goToReview = () => {
        navigate("/review-post", { state: movie });
    };

    const category = movie.category.categoryName;
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`${apiUrl}/api/movies/category/${category}`);
                setData(response.data.data);
            } catch (err) {
            } finally {
            }
        };
        fetchData();
    }, []);

    return (
        <ReviewPage>
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
            <MoviePageLayout>
                <MovieInfoCard>
                    <MovieImg src={`data:image/jpeg;base64,${movie.movieImg}`} alt="Movie Picture" />
                    <Movie style={{ padding: '20px' }}>
                        <MovieRating>
                            <h4 style={{ marginRight: '30px' }}>{movie.rating}</h4>
                            <StarRating size="large" name="rt" value={movie.rating} precision={0.1} readOnly />
                        </MovieRating>
                        <MovieTitle>{movie.title}</MovieTitle>
                        <h5>{movie.category.categoryName}</h5>
                    </Movie>
                </MovieInfoCard>
                <InfoLayout>
                    <InfoBlock>

                        <div style={{ display: "flex", justifyContent: "space-between" }}>
                            <div className="block" style={{width: "48%", float: "left"}}>
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

                            <div className="block" style={{width: "24%", float: "right"}}>
                                <h5>Watch Trailer</h5>
                                <MovieOutlinedIcon fontSize="large" />
                            </div>
                            <div className="block" style={{width: "24%", float: "right"}}>
                                <h5>Add to Wishlist</h5>
                                <button className="heart" onClick={() => handleAddToWishlist(movie.id)}>
                                    <FavoriteBorderOutlinedIcon fontSize="large" />
                                </button>
                            </div>
                        </div>

                        <div className="descriptionBlock" style={{height: "auto"}}>
                            <h2>Movie Description</h2>
                            <p>{movie.description}</p>
                        </div>
                    </InfoBlock>
                    <PPAL>
                        <h3>People also like</h3>
                        <div>
                            <MovieList ref={movieListRef}>
                                {data.map((item) => (
                                    <HorizontalMVCard
                                        key={item.id}
                                        name={item.title}
                                        img={`data:image/jpeg;base64,${item.movieImg}`}
                                        category={item.category.categoryName}
                                    />
                                ))}
                            </MovieList>
                        </div>
                    </PPAL>
                </InfoLayout>
            </MoviePageLayout>
        </ReviewPage>
    );
};
export default MovieInfo;
