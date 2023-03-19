import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    font-family: 'MaruBuri-Regular', sans-serif;
  }

  body {
    width: 100%;
    height: 100%;
    margin: 0 auto;
    background-color:#1B1B1B
  }

  button {
    background: transparent none;
    border: none;
    cursor: pointer;
    padding: 0;
  }
`;

export default GlobalStyle;
