import Dashboard from '~/pages/Dashboard/Dashboard';
import Review from '~/pages/Review';
import SignUpPage from '~/pages/SignUpPage/signUpPage';
const routes = [
    { path: '/', component: Dashboard },
    { path: '/review-post', component: Review, layout: null },
    { path: '/sign-up', component: SignUpPage},
];

export { routes };
