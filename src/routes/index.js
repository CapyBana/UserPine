import Dashboard from '~/pages/Dashboard/Dashboard';
import Review from '~/pages/Review';
const routes = [
    { path: '/', component: Dashboard },
    { path: '/review-post', component: Review, layout: null },
];

export { routes };
