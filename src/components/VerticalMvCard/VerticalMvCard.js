import { Link } from 'react-router-dom';
import { Image, MovieCard, MvDetail, MvRating } from './VerticalMvCard.style';
import Img from 'src/assets/images/alterImg.png';
import { React } from 'react';

const VerticalMvCard = (props) => {
    return (
        <MovieCard style={{ borderRadius: '10px' }}>
            <Link to="/movie-info">{props.img ? <Image src={props.img}></Image> : <Image src={Img}></Image>}</Link>
            <MvRating
                // onClick={} navigate to Review Page
                size="large"
                name="rt"
                value={props.rating}
                precision={0.5}
                readOnly
            />
            <MvDetail>
                <h1>{props.rating}</h1>
                <h2>{props.name}</h2>
            </MvDetail>
        </MovieCard>
    );
};

export default VerticalMvCard;
