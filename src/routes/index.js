import Dashboard from '~/pages/Dashboard/Dashboard';
import Review from '~/pages/Review/Review';
import SignUpPage from '~/pages/SignUpPage/signUpPage';
import UserProfile from '~/pages/UserProfile/userProfile';

const routes = [
    { path: '/', component: Dashboard },
    { path: '/review-post', component: Review, layout: null },
    { path: '/sign-up', component: SignUpPage},
    { path: '/user-profile', component: UserProfile, layout: null},
];

export { routes };
