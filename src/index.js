import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom';
import reportWebVitals from './reportWebVitals';
import GlobalStyles from './components/GlobalStyles/GlobalStyles.style';
import { SearchProvider } from './context/SearchProvider';
import { LoginProvider } from './context/loginContext';

const container = document.getElementById('root');

if (container) {
    const root = createRoot(container);

    root.render(
        
        <React.StrictMode>
            <GlobalStyles />
            <LoginProvider>
              <SearchProvider>
                <Router>
                    <App />
                </Router>
              </SearchProvider>
            </LoginProvider>

        </React.StrictMode>,
    );

    reportWebVitals();
}
