import React, { useState } from 'react';
import {
    CommentArea,
    GeneralReview,
    HorizontalMovieCard,
    Movie,
    MovieImg,
    MovieRating,
    Post,
    PostContainer,
    Review,
    StarPrompt,
    StarRating,
    StarReview,
    StarReviewRating,
    TextReview,
    MovieTitle
} from './ReviewForm.style';
import naruto from 'src/assets/images/naruto.png';
import { useMediaQuery, createTheme, ThemeProvider } from '@mui/material';
import axios from 'axios';
//import { LoginContext } from '~/context/loginContext';

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
    const { movieData } = props;
    const [rating2, setRating2] = useState(0); // Fixed to set `rating2` properly
    const apiUrl = process.env.REACT_APP_API_URL;

    const [formData, setFormData] = useState({
        userId: 1,
        movieId: 2,
        rating: 0,
        description: ""
    });

    const isComputer = useMediaQuery(theme.breakpoints.up("lg"));
    const isTab = useMediaQuery(theme.breakpoints.between("md", "lg"));
    const isPhone = useMediaQuery(theme.breakpoints.down("md"));

    const handleSubmit = async (e) => {
        // e.preventDefault();
        const comment = e.target.elements.cmt.value; // Get the value from the form element
        setFormData((prev) => ({
            ...prev,
            description: comment
        }));
        try {
            const response = await axios.post(`${apiUrl}/api/ratings`, formData);

            if (response.status === 200) {
                console.log(response);
            }
        } catch (err) {
            console.error(err.response?.data?.message || 'An error occurred. Please try again.');
        }
    };
    const CommentSection = () => {
        const row = isComputer ? "8" : "10";

        return (
            <form onSubmit={handleSubmit}>
                <CommentArea
                    rows={row}
                    placeholder="Whatcha thinking about?"
                    id="cmt"
                    required
                    style={{
                        fontSize: isPhone ? "var(--normal-text_size)" : "var(--medium-text_size)"
                    }}
                />
                <PostContainer
                    style={{
                        margin: isComputer ? "20px 0px" : "10px 0px"
                    }}
                >
                    <Post
                        type="submit"
                        value="Post"
                        style={{
                            fontSize: isComputer ? "var(--medium-text_size)" : "var(--normal-text_size)",
                            padding: isComputer ? "10px 20px" : "7px 14px",
                            cursor: "pointer"
                        }}
                    />
                </PostContainer>
            </form>
        );
    };


    return (
        <GeneralReview
            style={{
                paddingBottom: isComputer ? "0px" : "20px",
                marginTop: isComputer ? "32 px" : "16px"
            }}
        >
            <HorizontalMovieCard
                style={{
                    //flexDirection: isPhone ? "column" : "row"
                    padding: "28px",
                }}
            >
                <img
                    src={naruto}
                    alt="Movie Picture"
                    style={{
                        //margin:  "20px 0px" ,
                        //...(isPhone && { marginLeft: "auto", marginRight: "auto", width: "130px" })
                        width: "30%",
                        maxWidth: "140px",
                        height: "30%",
                        borderRadius: "10px",

                        display: "block",
                        marginLeft: "auto",
                        marginRight: "auto",
                    }}
                />
                <Movie
                    style={{
                        //margin: isComputer ? "25px 100px 25px 40px" : (isTab ? "18px 100px 18px 40px" : "10px 15px"),
                        marginLeft: "32px",
                        textAlign: "unset",
                    }}
                >
                    <MovieTitle
                        style={{
                            fontSize: "var(--large-text_size)"
                        }}
                    >
                        {movieData.name}
                    </MovieTitle>
                    <p
                        style={{
                            fontSize: "14px",
                            display: "block",/* or inline-block */
                            textOverflow: "ellipsis",
                            wordWrap: "break-word",
                            overflow: "hidden",
                            lineHeight: "1.3rem",
                            maxHeight: "6.5rem",
                            ...((isComputer || isTab) && { textAlign: "justify", textJustify: "inter-word" })
                        }}
                    >
                        Naruto là một loạt manga Nhật Bản được viết và minh họa bởi Kishimoto Masashi. Câu chuyện xoay
                        quanh Uzumaki Naruto, một ninja trẻ muốn tìm cách khẳng định mình để được mọi người công nhận và
                        nuôi ước mơ trở thành Hokage - người lãnh đạo Làng Lá.
                    </p>
                    <MovieRating
                        style={{
                            justifyContent: isPhone ? "center" : "flex-start"
                        }}
                    >
                        <h4 style={{ marginRight: '30px' }}>{formData.rating}</h4>
                        <StarRating
                            size="large"
                            name="rt"
                            value={formData.rating}
                            precision={0.1}
                            readOnly
                        />
                    </MovieRating>
                </Movie>
            </HorizontalMovieCard>
            <Review
                style={{
                    marginTop: isComputer ? "50px" : "20px"
                }}
            >
                <StarReview
                    style={{
                        flexDirection: isPhone ? "column" : "row",
                        marginBottom: (isPhone || isTab) ? "30px" : "40px",
                        marginTop: isComputer ? "20px" : "10px",
                        width: isComputer ? "93%" : (isTab ? "92%" : "85%")
                    }}
                >
                    <h3
                        style={{
                            ...(isComputer && { fontSize: "20px", marginRight: "200px" }),
                            ...(isTab && { fontSize: "15px", marginRight: "100px" }),
                            ...(isPhone && { fontSize: "15px" })
                        }}
                    >
                        How much would you rate this movie?
                    </h3>
                    <StarPrompt size="small">
                        <h5>{rating2}</h5>
                        <StarReviewRating
                            id="rating"
                            onChange={(event, newValue) => {
                                setRating2(newValue); // Fixed: Correctly update rating2
                                setFormData((prev) => ({
                                    ...prev,
                                    rating: newValue
                                }));
                            }}
                            size="medium"
                            name="rt"
                            value={rating2}
                            precision={0.5}
                        />
                    </StarPrompt>
                </StarReview>
                <TextReview
                    style={{
                        width: isComputer ? "93%" : (isTab ? "92%" : "90%")
                    }}
                >
                    <h3
                        style={{
                            fontSize: isComputer ? "20px" : "15px",
                            textAlign: isPhone ? 'center' : 'unset',
                            marginBottom: isPhone ? '-10px' : "0px"
                        }}
                    >
                        Share your thoughts
                    </h3>
                    <CommentSection />
                </TextReview>
            </Review>
        </GeneralReview>
    );
};

export default ReviewForm;
