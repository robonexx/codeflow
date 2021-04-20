import { createGlobalStyle} from "styled-components"

export const GlobalStyles = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    background: ${({ theme }) => theme.body};
     color: ${({ theme }) => theme.text}; 
    font-family: Tahoma, Helvetica, Arial, Roboto, sans-serif;
    transition: all 0.1s linear;
    width: 100vw;
    
  }
  `;