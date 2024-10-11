import { React, useState } from 'react';
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
} from './ReviewForm.style';
import naruto from 'src/assets/images/naruto.png';

const CommentSection = () => {
    return (
        <form target="_self" method="post">
            <CommentArea rows="25" placeholder="Whatcha thinking about?" required />
            <PostContainer>
                <Post type="submit" value="Post" />
            </PostContainer>
        </form>
    );
};
const ReviewForm = () => {
    const [rating] = useState(1);
    const [rating2, setRating] = useState(1);

    return (
        <GeneralReview>
            <HorizontalMovieCard>
                <div style={{ borderRadius: '10px', width: '26%' }}>
                    <MovieImg src={naruto} alt="Movie Picture" />
                </div>
                <Movie>
                    <h1>Movie Title</h1>
                    <p>
                        Naruto là một loạt manga Nhật Bản được viết và minh họa bởi Kishimoto Masashi. Câu chuyện xoay
                        quanh Uzumaki Naruto, một ninja trẻ muốn tìm cách khẳng định mình để được mọi người công nhận và
                        nuôi ước mơ trở thành Hokage - người lãnh đạo Làng Lá.
                    </p>
                    <MovieRating>
                        <h3>{rating}</h3>
                        <StarRating size="large" name="rt" value={rating} precision={0.1} readOnly />
                    </MovieRating>
                </Movie>
            </HorizontalMovieCard>
            <Review>
                <StarReview>
                    <h3>How much would you rate this movie?</h3>
                    <StarPrompt>
                        <h3>{rating2}</h3>
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
                <TextReview>
                    <h3>Share your thoughts</h3>
                    <CommentSection />
                </TextReview>
            </Review>
        </GeneralReview>
    );
};

export default ReviewForm;
