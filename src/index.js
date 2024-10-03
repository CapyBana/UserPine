import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom';
import reportWebVitals from './reportWebVitals';
import GlobalStyles from './components/GlobalStyles/GlobalStyles.style';
import Navbar from './components/Navbar/Navbar';

const container = document.getElementById('root');

if (container) {
    const root = createRoot(container);

    root.render(
        <React.StrictMode>
            <GlobalStyles />
            <Router>
                <Navbar />
                <App />
            </Router>
        </React.StrictMode>,
    );

    reportWebVitals();
}
