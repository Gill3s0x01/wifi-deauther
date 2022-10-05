import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  
  * {
   margin: 0;
   padding: 0;
   box-sizing: border-box;
  }

  body {
    
    width: 94%;
    background: ${(props) => props.theme.primary};
    color: ${(props) => props.theme.white};
    --webkit-font-smoothing: antialiased;
  }

  border-style, input-security, textarea, button {
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    font-size: 1rem;
  }

  :focus {
    outline: 0;
    box-shadow: 0 0 0.5 2px ${(props) => props.theme.blue_100}
  }

`
