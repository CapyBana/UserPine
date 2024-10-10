import { React, useState } from 'react';
import * as ReviewObj from './ReviewForm.style';
import naruto from 'src/assets/images/naruto.png';

const ReviewForm = () => {
    const [rating] = useState(1);
    const [rating2, setRating] = useState(1);

    return (
        <ReviewObj.GeneralReview>
            <link href="https://fonts.googleapis.com/css2?family=Unbounded&display=swap" rel="stylesheet" />
            <ReviewObj.HorizontalMovieCard>
                <ReviewObj.MovieImg src={naruto} alt='Movie Picture'/>
                <ReviewObj.Movie>
                    <ReviewObj.MovieTitle>Movie Title</ReviewObj.MovieTitle>
                    <ReviewObj.MovieDescription>
                        Naruto là một loạt manga Nhật Bản được 
                        viết và minh họa bởi Kishimoto Masashi.
                        Câu chuyện xoay quanh Uzumaki Naruto,
                        một ninja trẻ muốn tìm cách khẳng định mình
                        để được mọi người công nhận và nuôi ước mơ trở thành Hokage
                        - người lãnh đạo Làng Lá.
                    </ReviewObj.MovieDescription>
                    <ReviewObj.MovieRating>
                        <ReviewObj.NumRating>{rating}</ReviewObj.NumRating>
                        <ReviewObj.StarRating
                            size="large"
                            name="rt"
                            value={rating}
                            precision={0.1}
                            readOnly
                        />
                    </ReviewObj.MovieRating>
                </ReviewObj.Movie>
            </ReviewObj.HorizontalMovieCard>
            <ReviewObj.Review>
                <ReviewObj.StarReview>
                    <ReviewObj.Question>How much would you rate this movie?</ReviewObj.Question>
                    <ReviewObj.StarPrompt>
                    <ReviewObj.NumRating style={{fontSize:19}}>{rating2}</ReviewObj.NumRating>
                        <ReviewObj.StarReviewRating
                            onChange={(event, newValue) => {
                                setRating(newValue);
                            }}
                            size="medium"
                            name="rt"
                            value={rating2}
                            precision={0.5}
                        />
                    </ReviewObj.StarPrompt>
                </ReviewObj.StarReview>
                <ReviewObj.TextReview>
                    <ReviewObj.Question>Share your thoughts</ReviewObj.Question>
                    <ReviewObj.CommentSection />
                </ReviewObj.TextReview>
            </ReviewObj.Review>
        </ReviewObj.GeneralReview>
    );
}

export default ReviewForm;