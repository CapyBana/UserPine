import Dashboard from '~/pages/Dashboard/Dashboard';
import SignUpPage from '~/pages/SignUpPage/signUpPage';
import LogInPage from '~/pages/LogInPage/LogInPage';
import UserProfile from '~/pages/UserProfile/userProfile';
import { ReviewPage } from '~/pages/Review/Review.style';

const routes = [
    { path: '/', component: Dashboard },
    { path: '/review-post', component: ReviewPage },
    { path: '/sign-up', component: SignUpPage },
    { path: '/log-in', component: LogInPage },
    { path: '/user-profile', component: UserProfile, layout: null },
];

export { routes };
