import Dashboard from '~/pages/Dashboard/Dashboard';
import SignUpPage from '~/pages/SignUpPage/signUpPage';
import LogInPage from '~/pages/LogInPage/LogInPage';
import UserProfile from '~/pages/UserProfile/userProfile';
<<<<<<< HEAD
import Review from '~/pages/Review/Review';
import SearchPage from '~/pages/SearchPage/SearchPage';
=======
import { ReviewPage } from '~/pages/Review/Review.style';
>>>>>>> d6c7a661bb1c4a0239d0f6b39dfac8ab3d73edfc

const routes = [
    { path: '/', component: Dashboard },
    { path: '/review-post', component: ReviewPage },
    { path: '/sign-up', component: SignUpPage },
    { path: '/log-in', component: LogInPage },
    { path: '/user-profile', component: UserProfile, layout: null },
    { path: '/search-result', component: SearchPage, layout: null },
];

export { routes };
