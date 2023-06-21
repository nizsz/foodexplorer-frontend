import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  *{
    box-sizing: border-box;
    padding: 0;
    margin: 0;
  }

  :root {
    font-size: 62.5%;
  }

  body {
    background-color: ${({theme}) => theme.COLORS.BACKGROUND_600};
    color: ${({theme}) => theme.COLORS.WHITE_100};
    font-size: 1.6rem;
  }
  
  body, button ,a {
    font-family: 'Poppins', sans-serif;
  }

  span {
    font-family: 'Roboto', sans-serif;
  }

  &::placeholder{
    font-family: 'Roboto', sans-serif;
  }

  a {
    text-decoration: none;

  }

  button,a {
    cursor: pointer;
    transition: filter 0.2s;
  }

  button:hover,a:hover {
    filter: brightness(0.9);
  }

  
`;
