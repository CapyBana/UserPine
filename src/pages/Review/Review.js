
import ReviewForm from '~/components/ReviewForm/ReviewForm';
import ReturnBlock from '~/components/ReturnLink/Return';
import { Link } from 'react-router-dom';
import { ReviewPage } from './Review.style';

const Review = () => {
    return (
        <ReviewPage>
            <Link
                to="/"
                style={{
                    textDecoration: 'none',
                    width: '400px',
                    padding: '80px 2.5% 15px',
                }}
            >
                <ReturnBlock backmessage="Back to homepage" />
            </Link>
            <ReviewForm name="Movie Title" />
        </ReviewPage>
    );
};

export default Review;
