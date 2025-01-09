import React, { useContext, useState } from 'react';
import {
    CommentArea,
    GeneralReview,
    HorizontalMovieCard,
    Movie,
    MovieRating,
    Post,
    PostContainer,
    Review,
    StarPrompt,
    StarRating,
    StarReview,
    StarReviewRating,
    MovieTitle,
} from './ReviewForm.style';
import { useMediaQuery, createTheme, ThemeProvider } from '@mui/material';
import axios from 'axios';
import { LoginContext } from '~/context/loginContext';

const theme = createTheme();

const ReviewForm = (props) => {
    const { movieData } = props;
    return (
        <ThemeProvider theme={theme}>
            <ResponsiveForm movieData={movieData} />
        </ThemeProvider>
    );
};

const ResponsiveForm = (props) => {
    const { userId } = useContext(LoginContext);
    const { movieData } = props;
    const [rating2, setRating2] = useState(0); // Fixed to set `rating2` properly
    const apiUrl = process.env.REACT_APP_API_URL;
    const [formData, setFormData] = useState({
        user: { id: userId },
        movie: { id: movieData.id },
        rating: rating2,
        ratingContent: '',
    });

    const isComputer = useMediaQuery(theme.breakpoints.up('lg'));
    const isTab = useMediaQuery(theme.breakpoints.between('md', 'lg'));
    const isPhone = useMediaQuery(theme.breakpoints.down('md'));

    const handleSubmit = async (e) => {
        e.preventDefault();
        const comment = e.target.elements.cmt.value;

        setFormData((prev) => ({
            ...prev,
            ratingContent: comment,
        }));

        try {
            const response = await axios.post(`${apiUrl}/api/ratings`, {
                ...formData,
                ratingContent: comment,
            });

            if (response.status === 200) {
                console.log('Review submitted successfully:', response.data);
            }
        } catch (err) {
            console.error(err.response?.data?.message || 'An error occurred. Please try again.');
        }
    };

    const handleRatingChange = (event, newValue) => {
        setRating2(newValue);
        setFormData((prev) => ({
            ...prev,
            rating: newValue,
        }));
    };

    const CommentSection = () => {
        const row = isComputer ? '6' : '8';
        return (
            <form onSubmit={handleSubmit}>
                <CommentArea
                    rows={row}
                    placeholder="Write a review..."
                    id="cmt"
                    required
                    style={{
                        fontSize: isPhone ? 'var(--normal-text_size)' : 'var(--medium-text_size)',
                    }}
                />
                <PostContainer>
                    <Post
                        type="submit"
                        value="Post"
                        style={{
                            fontSize: isComputer ? 'var(--medium-text_size)' : 'var(--normal-text_size)',
                            padding: isComputer ? '10px 20px' : '7px 14px',
                            cursor: 'pointer',
                        }}
                    />
                </PostContainer>
            </form>
        );
    };

    return (
        <GeneralReview
            style={{
                paddingBottom: isComputer ? '0px' : '20px',
                marginTop: isComputer ? '32 px' : '16px',
            }}
        >
            <HorizontalMovieCard
                style={{
                    //flexDirection: isPhone ? "column" : "row"
                    padding: '28px',
                }}
            >
                <img
                    src={`data:image/jpeg;base64, ${movieData.movieImg}`}
                    alt="Movie Picture"
                    style={{
                        //margin:  "20px 0px" ,
                        //...(isPhone && { marginLeft: "auto", marginRight: "auto", width: "130px" })
                        width: '30%',
                        maxWidth: '140px',
                        height: '30%',
                        borderRadius: '10px',

                        display: 'block',
                        marginLeft: '5%',
                        marginRight: 'auto',
                    }}
                />
                <Movie
                    style={{
                        //margin: isComputer ? "25px 100px 25px 40px" : (isTab ? "18px 100px 18px 40px" : "10px 15px"),
                        marginLeft: '32px',
                        textAlign: 'unset',
                    }}
                >
                    <MovieTitle
                        style={{
                            fontSize: 'var(--title-text_size)',
                        }}
                    >
                        {movieData.title}
                    </MovieTitle>
                    <p
                        style={{
                            fontSize: '14px',
                            display: 'block' /* or inline-block */,
                            textOverflow: 'ellipsis',
                            wordWrap: 'break-word',
                            overflow: 'hidden',
                            lineHeight: '1.3rem',
                            maxHeight: '6.5rem',
                            ...((isComputer || isTab) && { textAlign: 'justify', textJustify: 'inter-word' }),
                        }}
                    >
                        {movieData.ratingContent}
                    </p>
                    <MovieRating
                        style={{
                            justifyContent: isPhone ? 'center' : 'flex-start',
                        }}
                    >
                        <h4 style={{ marginRight: '30px' }}>{movieData.rating}</h4>
                        <StarRating
                            size="large"
                            name="rt"
                            value={movieData.movieRating}
                            precision={0.1}
                            readOnly
                            //style={{ backgroundColor: "rgb(0, 0, 0)"}}
                        />
                    </MovieRating>
                </Movie>
            </HorizontalMovieCard>
            <Review
                style={{
                    marginTop: '32px',
                }}
            >
                <StarReview
                    style={{
                        flexDirection: isPhone ? 'column' : 'row',
                        marginBottom: isPhone || isTab ? '10px' : '20px',
                        width: '100%',
                    }}
                >
                    <h3
                        style={{
                            ...(isComputer && { fontSize: '20px', marginRight: '200px' }),
                            ...(isTab && { fontSize: '15px', marginRight: '100px' }),
                            ...(isPhone && { fontSize: '15px' }),
                            textAlign: isPhone ? 'center' : 'left',
                        }}
                    >
                        How much would you rate this movie?
                    </h3>
                    <StarPrompt size="small">
                        <h5>{rating2}</h5>
                        <StarReviewRating
                            id="rating"
                            onChange={handleRatingChange}
                            size="medium"
                            name="rt"
                            value={rating2}
                            precision={0.5}
                        />
                    </StarPrompt>
                </StarReview>
                <h3
                    style={{
                        fontSize: isComputer ? '20px' : '15px',
                        display: isPhone ? 'none' : 'block',
                        margin: 0,
                        marginBottom: '8px',
                        padding: 0,
                    }}
                >
                    Share your thoughts
                </h3>
                <CommentSection />
            </Review>
        </GeneralReview>
    );
};

export default ReviewForm;
