import MyMovieRating from '~/components/myMovieRating/myMovieRating';
import { UserProfilePage } from './userProfile.style';
import ReturnBlock from '~/components/ReturnLink/Return';
import { Link } from 'react-router-dom';

export default function UserProfile() {
    return (
        <UserProfilePage>
            <Link
                to="/"
                style={{
                    textDecoration: 'none',
                    width: '400px',
                    paddingLeft: '80px',
                    paddingTop: '80px',
                }}
            >
                <ReturnBlock backmessage="Back to homepage" />
            </Link>
            <MyMovieRating style={{ backgroundColor: 'transparent' }} />
        </UserProfilePage>
    );
}
