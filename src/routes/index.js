import Dashboard from '~/pages/Dashboard/Dashboard';
import PrinterPage from '~/pages/PrinterPage';
import StudentPage from '~/pages/StudentPages';
const routes = [
    { path: '/', component: Dashboard },
    { path: '/printerPage', component: PrinterPage },
    { path: '/studentPage', component: StudentPage },
];

export { routes };
