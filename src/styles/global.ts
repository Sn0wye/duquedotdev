import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`

  :root {
    --primary: #fca311;
    --primary-hover: #eb9710;
    --secondary: #14213d;

    --background: #ecf0f3;
    --text-body: #020413;
  }

  * {
  margin: 0;
  padding: 0;
  outline: 0;
  box-sizing: border-box;
}

html {
  @media (max-width: 1080px) {
    font-size: 93.75%;
  }

  @media (max-width: 720px) {
    font-size: 87.5%;
  }
}

body,
input,
button {
  font-family: Poppins, sans-serif;
  background: var(--background);
  color: var(--text-body);
  -webkit-font-smoothing: antialiased;
}

button {
  cursor: pointer;
}

`;
