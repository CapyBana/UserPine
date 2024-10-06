import React from 'react';
import { Image, MovieCard, MvDetail, MvRating } from './VerticalMvCard.style';
import Img from 'src/assets/images/naruto.png';
import { useState } from 'react';

const VerticalMvCard = () => {
    const [rating, setRating] = useState(1);

    return (
        <MovieCard style={{ borderRadius: '10px' }}>
            <Image src={Img}></Image>
            <MvRating
                onChange={(event, newValue) => {
                    setRating(newValue);
                }}
                size="large"
                name="rt"
                value={rating}
                precision={0.5}
            />
            <MvDetail>
                <h1>{rating}</h1>
                <h2>Naruto</h2>
            </MvDetail>
        </MovieCard>
    );
};

export default VerticalMvCard;
