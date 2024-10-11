import Dashboard from '~/pages/Dashboard/Dashboard';
import PrinterPage from '~/pages/PrinterPage';
import Review from '~/pages/Review';
import StudentPage from '~/pages/StudentPages';
const routes = [
    { path: '/', component: Dashboard },
    { path: '/printerPage', component: PrinterPage },
    { path: '/studentPage', component: StudentPage, layout: null },
    { path: '/review-post', component: Review, layout: null},
];

export { routes };
