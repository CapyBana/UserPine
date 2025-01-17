import { Route, Routes } from 'react-router-dom';
import { routes } from './routes';
import { Fragment, useState } from 'react';
import Navbar from './components/Navbar/Navbar';
import SignUpPage from './pages/SignUpPage/signUpPage';
import LogInPage from './pages/LogInPage/LogInPage';

function App() {
    const [element, setElement] = useState('');
    return (
        <div className="app">
            <Navbar handlePage={(val) => setElement(val)} />
            {element === 'sign-up' && <SignUpPage handlePage={(val) => setElement(val)}></SignUpPage>}
            {element === 'log-in' && <LogInPage handlePage={(val) => setElement(val)}></LogInPage>}
            <Routes>
                {routes.map((route, index) => {
                    const Layout = route.layout ? route.layout : Fragment;
                    const Page = route.component;
                    return (
                        <Route
                            key={index}
                            path={route.path}
                            element={
                                <Layout>
                                    <Page />
                                </Layout>
                            }
                        />
                    );
                })}
            </Routes>
        </div>
    );
}

export default App;
