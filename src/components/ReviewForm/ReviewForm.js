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

const theme = createTheme();

const ReviewForm = (props) => {
    return (
        <ThemeProvider theme={theme}>
            <ResponsiveForm name={props.name}/>
        </ThemeProvider>
    );
};

const ResponsiveForm = ({ name }) => {
    const [rating] = useState(1);
    const [rating2, setRating] = useState(1);

    const isComputer = useMediaQuery(theme => theme.breakpoints.up("lg"));
    const isTab = useMediaQuery(theme => theme.breakpoints.between("md", "lg"));
    const isPhone = useMediaQuery(theme => theme.breakpoints.down("md"));

    const CommentSection = () => {
        const row = isComputer ? "8" : "10";
    
        return (
            <form target="_self" method="post">
                <CommentArea rows={row} placeholder="Whatcha thinking about?" required style={{
                    fontSize: isPhone ? "var(--normal-text_size)" : "var(--medium-text_size)"
                }} />
                <PostContainer style={{
                    margin: isComputer ? "20px 0px" : "10px 0px"
                }}>
                    <Post type="submit" value="Post" style={{
                        fontSize: isComputer ? "var(--medium-text_size)" : "var(--normal-text_size)",
                        padding: isComputer ? "10px 20px" : "7px 14px"
                    }} />
                </PostContainer>
            </form>
        );
    };

    return (
        <GeneralReview style={{
            paddingBottom: isComputer ? "0px" : "20px",
            marginTop: isComputer ? "50px" : "20px"
        }}>
            <HorizontalMovieCard style={{
                flexDirection: isPhone ? "column" : "row"
            }}>
                <MovieImg src={naruto} alt="Movie Picture" style={{
                    margin: isPhone ? "20px 0px" : "20px 50px",
                    ...(isPhone && {marginLeft: "auto", marginRight: "auto", width: "130px"})
                }} />
                <Movie style={{
                    margin: isComputer ? "25px 100px 25px 40px" : (isTab ? "18px 100px 18px 40px" : "10px 15px"),
                    textAlign: isPhone ? "center" : "unset"
                }}>
                    <MovieTitle style={{
                        fontSize: isComputer ? "var(--title-text_size)" : "var(--large-text_size)"
                    }}>
                        {name}
                    </MovieTitle>
                    <p style={{
                        fontSize: isComputer ? "var(--normal-text_size)" : "14px",
                        ...((isComputer || isTab) && {textAlign: "justify", textJustify: "inter-word"})
                    }}>
                        Naruto là một loạt manga Nhật Bản được viết và minh họa bởi Kishimoto Masashi. Câu chuyện xoay
                        quanh Uzumaki Naruto, một ninja trẻ muốn tìm cách khẳng định mình để được mọi người công nhận và
                        nuôi ước mơ trở thành Hokage - người lãnh đạo Làng Lá.
                    </p>
                    <MovieRating style={{
                        justifyContent: isPhone ? "center" : "flex-start"
                    }}>
                        <h4 style={{ marginRight: '30px' }}>{rating}</h4>
                        <StarRating size="large" name="rt" value={rating} precision={0.1} readOnly style={{
                            
                        }} />
                    </MovieRating>
                </Movie>
            </HorizontalMovieCard>
            <Review style={{
                marginTop: isComputer ? "50px" : "20px"
            }}>
                <StarReview style={{
                    flexDirection: isPhone ? "column" : "row",
                    marginBottom: (isPhone || isTab) ? "30px" : "40px",
                    marginTop: isComputer ? "20px" : "10px",
                    width: isComputer ? "93%" : (isTab ? "92%" : "85%")
                }}>
                    <h3 style={{
                        ...(isComputer && {fontSize: "20px", marginRight: "200px"}),
                        ...(isTab && {fontSize: "15px", marginRight: "100px"}), 
                        ...(isPhone && {fontSize: "15px"})
                    }}>
                        How much would you rate this movie?
                    </h3>
                    <StarPrompt size="small">
                        <h5>{rating2}</h5>
                        <StarReviewRating
                            onChange={(event, newValue) => {
                                setRating(newValue);
                            }}
                            size="medium"
                            name="rt"
                            value={rating2}
                            precision={0.5}
                        />
                    </StarPrompt>
                </StarReview>
                <TextReview style={{
                    width: isComputer ? "93%" : (isTab ? "92%" : "90%")
                }}>
                    <h3 style={{
                        fontSize: isComputer ? "20px" : "15px",
                        textAlign: isPhone ? 'center' : 'unset',
                        marginBottom: isPhone ? '-10px' : "0px"
                    }}>
                        Share your thoughts
                    </h3>
                    <CommentSection />
                </TextReview>
            </Review>
        </GeneralReview>
    );
};

export default ReviewForm;