import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  :root {
    --max-width: 1120px;

    --green: #33cc95;
    --red: #e52e4d;
    --primary: #5429cc;
    --primary-light: #6933ff;
    --text-title: #363f5f;
    --text-body: #969cb3;
    --background: #f0f2f5;
    --shape: #ffffff;
  }
  
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    font-size: 62.5%;

    @media (max-width: 1100px) {
      font-size: 56.25%;
    }

    @media (max-width: 720px) {
      font-size: 50%;
    }
  }

  h1 { font-size: 3.2rem; }
  h2 { font-size: 2.4rem; }
  h3 { font-size: 1.8rem; }
  h4, span, strong, p { 
    font-size: 1.6rem; 
  }

  body { 
    background: var(--background);
    -webkit-font-smoothing: antialiased;
  }

  body, input, textarea, button {
    font-family: 'Poppins', 'Helvetica Neue', Helvetica, Arial, sans-serif;
    font-weight: 400;
    font-size: 1.6rem; 
  }

  h1, h2, h3, h4, h5, h6, strong {
    font-weight: 600;
  }

  button { 
    cursor: pointer;
    border: 0;
  }

  [disabled] {
    opacity: 0.6;
    cursor: not-allowed;
  }
`