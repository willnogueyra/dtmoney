import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  :root {
    --background: #f0f2f5;
    --red: #e52e4d;
    --blue: #5429cc;

    --blue-light: #6933FF;

    --text-title: #365f5f;
    --text-body: #969cb3;

    --background: #f0f2f5;
    --shape: #ffffff;

  }
  
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  // font-size: 16px (desktop)
  html {
    @media (max-width: 1080px) {
      font-size: 93.75%; // 15px
    }

    @media (max-width: 720px) {
      font-size: 87.5%;
    }
  }

  // REM = 1rem = 16px

  body {
    background: var(--background);
    -webkit-font-smoothing: antialiased; // hack p/ fontes ficarem mais nítidas em navegadores c/ engine do chrome
  }

  button {
    cursor: pointer;
  }

  [disabled] {
    opacity: 0.6;
    cursor: not-allowed;
  }
`