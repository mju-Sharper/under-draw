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
    background-color: ${({ theme }) => theme.colors.GRAY}
  }

  button {
    background: transparent none;
    border: none;
    cursor: pointer;
    padding: 0;
  }

  ul {
    list-style: none;
  }
`;

export default GlobalStyle;
