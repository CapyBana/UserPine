import { Link } from 'react-router-dom';
import { Image, MovieCard, MvDetail, MvRating } from './VerticalMvCard.style';
import Img from 'src/assets/images/naruto.png';
import { useState, React } from 'react';

const VerticalMvCard = (props) => {
    const [rating, setRating] = useState(1);

    return (
        <MovieCard style={{ borderRadius: '10px' }}>
            <Link to='/review'>
                <Image src={Img}></Image>
            </Link>
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
                <h2>{props.name}</h2>
            </MvDetail>
        </MovieCard>
    );
};

export default VerticalMvCard;
