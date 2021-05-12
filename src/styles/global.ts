import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`  
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

    @media (max-width: 400px) {
      font-size: 43.75%;
    }
  }

  h1 { font-size: 3.2rem; }
  h2 { font-size: 2.4rem; }
  h3 { font-size: 1.8rem; }
  h4, span, strong, p { 
    font-size: 1.6rem; 
  }

  body { 
    background: ${props => props.theme.colors.background};
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
    background: transparent;
  }

  [disabled] {
    opacity: 0.6;
    cursor: not-allowed;
  }

  .react-modal-overlay {
    background: rgba(0, 0, 0, .5);

    position: fixed;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;

    display: flex;
    align-items: center;
    justify-content: center;
  }
  .react-modal-content {
    background: ${props => props.theme.colors.background};

    width: 100%;
    max-width: 58rem;

    position: relative;
    padding: 4.8rem;
    border-radius: 0.5rem;
  }

  .react-modal-close {
    position: absolute;
    top: 2.4rem;
    right: 2.4rem;

    transition: filter 0.1s;

    &:hover {
      filter: brightness(50%);
    }
  }
`;
