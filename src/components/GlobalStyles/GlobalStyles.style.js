import { createGlobalStyle } from 'styled-components';
import normalize from 'normalize.css';

const GlobalStyles = createGlobalStyle`
  ${normalize}
  *, *::after, *::before{
        margin:0;
        padding:0;
        box-sizing: border-box;
  }
  :root {
    --primary-red: #e12117; 
    --primary-red-hover: #ff6347; 
    --primary-black: #D9D9D9
  }

  html {
    height: 100%;
}
  body {
    font-family: 'Roboto', sans-serif;
    font-size: 1.6rem;
    line-height: 1.5;
    min-height: 100vh; 
    text-rendering: optimizeSpeed;
  }

  #root {
    display: flex;
  }
`;

export default GlobalStyles;
