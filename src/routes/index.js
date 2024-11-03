import Dashboard from '~/pages/Dashboard/Dashboard';
import SignUpPage from '~/pages/SignUpPage/signUpPage';
import LogInPage from '~/pages/LogInPage/LogInPage';
import UserProfile from '~/pages/UserProfile/userProfile';
import Review from '~/pages/Review';
import SearchPage from '~/pages/SearchPage/SearchPage';

const routes = [
    { path: '/', component: Dashboard },
    { path: '/review-post', component: Review, layout: null },
    { path: '/sign-up', component: SignUpPage },
    { path: '/log-in', component: LogInPage },
    { path: '/user-profile', component: UserProfile, layout: null },
    { path: '/search-result', component: SearchPage, layout: null },
];

export { routes };
