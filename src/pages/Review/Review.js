
import ReviewForm from '~/components/ReviewForm/ReviewForm';
import ReturnBlock from '~/components/ReturnLink/Return';
import { Link, useLocation } from 'react-router-dom';
import { ReviewPage } from './Review.style';

const Review = () => {
    const movieData = useLocation().state;
    console.log(movieData)
    return (
        <ReviewPage>
            <Link
                to="/"
                style={{
                    // textDecoration: 'none',
                    // width: '400px',
                    // padding: '80px 2.5% 15px',
                    margin: '80px 3% 10px 3%',
                }}
            >
                <ReturnBlock backmessage="Home" />
            </Link>
            <ReviewForm movieData={movieData} />
        </ReviewPage>
    );
};

export default Review;
