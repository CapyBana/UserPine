import { Route, Routes } from 'react-router-dom';
import { routes } from './routes';
import { Fragment, useEffect, useState } from 'react';
import Navbar from './components/Navbar/Navbar';
import SignUpPage from './pages/SignUpPage/signUpPage';

function App() {
    const [element, setElement] = useState('');
    useEffect(() => {
        console.log(element);
    }, [element]);
    return (
        <div className="app">
            <Navbar handlePage={(val) => setElement(val)} />
            {element === 'sign-up' && <SignUpPage></SignUpPage>}

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
