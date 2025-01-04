import Dashboard from '~/pages/Dashboard/Dashboard';
import SignUpPage from '~/pages/SignUpPage/signUpPage';
import LogInPage from '~/pages/LogInPage/LogInPage';
import UserProfile from '~/pages/UserProfile/userProfile';
import Review from '~/pages/Review/Review';
import MovieInfo from '~/pages/MovieInfo/MovieInfo';
import trendingMovie from '~/components/trendingMoviePage/trendingMovie';
import Notification from '~/components/Notification/NotiMess';
import SearchPage from '~/pages/SearchPage/SearchPage';

const routes = [
    { path: '/', component: Dashboard },
    { path: '/review-post', component: Review },
    { path: '/sign-up', component: SignUpPage },
    { path: '/log-in', component: LogInPage },
    { path: '/user-profile', component: UserProfile, layout: null },
    { path: '/movie-info', component: MovieInfo },
    { path: '/trending-movie', component: trendingMovie },
    { path: '/noti', component: Notification },
    { path: '/search-result/:result', component: SearchPage },
];

export { routes };
