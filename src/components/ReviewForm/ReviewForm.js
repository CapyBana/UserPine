import { React, useState } from 'react';
import * as ReviewObj from './ReviewForm.style';
import naruto from 'src/assets/images/naruto.png';

const ReviewForm = () => {
    const [rating] = useState(1);

    return (
        <ReviewObj.GeneralReview>
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
                            precision={0.5}
                        />
                    </ReviewObj.MovieRating>
                </ReviewObj.Movie>
            </ReviewObj.HorizontalMovieCard>
            <ReviewObj.Review>
                <ReviewObj.StarReview>
                    
                </ReviewObj.StarReview>
            </ReviewObj.Review>
        </ReviewObj.GeneralReview>
    );
}

export default ReviewForm;