import { Route, Routes, Link } from 'react-router-dom';
import { routes } from './routes';
import DefaultLayout from './components/Layout';
import { Fragment } from 'react';
function App() {
    return (
        <div className="app">
            <div className="header">
                <Link to="/">
                    <h1>Dashboard</h1>
                </Link>
                <Link to="/Printer">
                    <h1>Printer Page</h1>
                </Link>
                <Link to="/StudentPage">
                    <h1>StudentPage</h1>
                </Link>
            </div>
            <h3>Content</h3>
            <div className="content">
                <Routes>
                    {routes.map((route, index) => {
                        const Layout = route.layout === null ? Fragment : DefaultLayout;
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
        </div>
    );
}

export default App;
