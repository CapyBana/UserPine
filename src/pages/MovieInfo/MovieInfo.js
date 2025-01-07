import { React, useContext, useRef, useState } from "react";
import { InfoBlock, InfoLayout, MovieCard, MovieInfoCard, MovieList, MoviePageLayout, PPAL } from "./MovieInfo.style";
import { Movie, MovieImg, MovieRating, MovieTitle, StarRating } from "~/components/ReviewForm/ReviewForm.style";
import naruto from 'src/assets/images/naruto.png';
import { Link } from "react-router-dom";
import ReturnBlock from "~/components/ReturnLink/Return";
import { ReviewPage } from "../Review/Review.style";
import Img from 'src/assets/images/naruto.png';
import { Image, MvDetail, MvRating } from "~/components/VerticalMvCard/VerticalMvCard.style";
import MovieOutlinedIcon from '@mui/icons-material/MovieOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import { MovieContext } from "~/context/movieContext";

const HorizontalMVCard = (props) => {
    const [rating] = useState(4.5);

    return (
        <MovieCard>
            <Link to='/review-post' 
                    style={{ width: "50%", float: "left" }}>
                <Image src={Img}></Image>
            </Link>
            <div style={{ flexDirection: "column", float: "right" }}>
                <MvRating
                    size="medium"
                    name="rt"
                    value={rating}
                    precision={0.5}
                    readOnly
                />
                <MvDetail>
                    <h1>{rating}</h1>
                    <h2>{props.name}</h2>
                </MvDetail>
            </div>
        </MovieCard>
    );
};

const MovieInfo = () => {
    const [rating, setRating] = useState(4.5);
    const { movie, handleAddToWishlist } = useContext(MovieContext);
    const movieListRef = useRef(null);

    // const handleAddToWishlist = async () => {
    //     try {
    //         const response = await axios.post(`${apiUrl}/api/wishlist`, {
    //             userId: userId,
    //             movieId: movie.id,
    //         });

    //         if (response.status === 200) {
    //             alert('Added to Wishlist!');
    //         }

    //     } catch(err) {
    //         alert('Failed to add Wishlist!');
    //         console.log(userId);
    //         console.log(movie.id);
    //     }
    // }

    return (
        <ReviewPage>
            <Link to='/' style={{ 
                textDecoration:'none', 
                width:'400px', 
                padding:'80px 2.5% 15px' 
            }}>
                <ReturnBlock backmessage="Back to homepage" />
            </Link>
            <MoviePageLayout>
                <MovieInfoCard>
                    <MovieImg src={naruto} alt="Movie Picture" />
                    <Movie style={{padding: "20px"}}>
                        <MovieRating>
                            <h4 style={{ marginRight:'30px' }}>{movie.rating}</h4>
                            <StarRating size="large" name="rt" value={movie.rating} precision={0.1} readOnly />
                        </MovieRating>
                        <MovieTitle>{movie.title}</MovieTitle>
                    </Movie>
                </MovieInfoCard>
                <InfoLayout>
                    <InfoBlock>
                        <div style={{ display: "flex", justifyContent: "space-between" }}>
                            <div className="block" style={{width: "48%", float: "left"}}>
                                <h5>Give your own rating</h5>
                                <Link to='/review-post'>
                                    <MvRating
                                        onChange={(event, newValue) => {
                                            setRating(newValue);
                                        }}
                                        size="medium"
                                        name="rt"
                                        value={rating}
                                        precision={0.5}
                                    />
                                </Link>
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
                            <p>
                                {movie.description}
                                {/* Naruto là một loạt manga Nhật Bản được viết và minh họa bởi Kishimoto Masashi. Câu chuyện xoay
                                quanh Uzumaki Naruto, một ninja trẻ muốn tìm cách khẳng định mình để được mọi người công nhận và
                                nuôi ước mơ trở thành Hokage - người lãnh đạo Làng Lá. */}
                            </p>
                        </div>
                    </InfoBlock>
                    <PPAL>
                        <h3>People also like</h3>
                        <div>
                            <MovieList ref={movieListRef}>
                                <HorizontalMVCard name="Movie No1" />
                                <HorizontalMVCard name="Movie No2" />
                                <HorizontalMVCard name="Movie No3" />
                                <HorizontalMVCard name="Movie No4" />
                                <HorizontalMVCard name="Movie No5" />
                                <HorizontalMVCard name="Movie No6" />
                            </MovieList>
                        </div>
                    </PPAL>
                </InfoLayout>
            </MoviePageLayout>
        </ReviewPage>
    );
};
export default MovieInfo;