import Dashboard from '~/pages/Dashboard/Dashboard';
import SignUpPage from '~/pages/SignUpPage/signUpPage';
import LogInPage from '~/pages/LogInPage/LogInPage';
import UserProfile from '~/pages/UserProfile/userProfile';
import ReviewPage from '~/pages/Review/Review';
import Review from '~/pages/Review/Review';
import MovieInfo from '~/pages/MovieInfo/MovieInfo';
import Notification from '~/components/Notification/NotiMess';

const routes = [
    { path: '/', component: Dashboard },
    { path: '/review-post', component: Review },
    { path: '/sign-up', component: SignUpPage },
    { path: '/log-in', component: LogInPage },
    { path: '/user-profile', component: UserProfile, layout: null },
    { path: '/movie-info', component: MovieInfo },
    { path: '/noti', component: Notification },
];

export { routes };
