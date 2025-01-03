import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom';
import reportWebVitals from './reportWebVitals';
import GlobalStyles from './components/GlobalStyles/GlobalStyles.style';
import { LoginProvider } from './context/loginContext';
import { MovieProvider } from './context/movieContext';

const container = document.getElementById('root');

if (container) {
    const root = createRoot(container);

    root.render(
        <React.StrictMode>
            <GlobalStyles />
            <LoginProvider>
                <MovieProvider>
                    <Router>
                        <App />
                    </Router>
                </MovieProvider>
            </LoginProvider>
        </React.StrictMode>,
    );

    reportWebVitals();
}
