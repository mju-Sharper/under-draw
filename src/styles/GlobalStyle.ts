import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    font-family: 'MaruBuri-Regular', sans-serif;
  }

  body {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    height: 100%;
    margin: 0 auto;
    background-color: ${({ theme }) => theme.colors.GRAY}
  }

  p {
    margin: 0;
    padding: 0;
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
