import styled from "styled-components"

export const Container = styled.div `
  width: 100%;
  height: 100vh;

  padding: 0 13.6rem;

  display: flex;
  place-content: center;
  align-items: center;

  justify-content: space-around;

  >div {
    display: flex;
    gap: 1.9rem;

    h1{
    font-family: 'Roboto';
    font-size: 4.2rem;
    font-weight: 700 ;

    white-space: nowrap;
  }
  }

  @keyframes pulsation {
    0%{
      scale: 1.1;
    }

    50%{
      scale: 0.7;
    }

    100%{
      scale: 1.1;
    }

  }

  @media(max-width:900px) {
    display: grid;
    flex-direction: column;

    padding: 0 1rem;
  }
`;

export const Form = styled.form`  
  width: 100%;
  max-width: 47.6rem;

  display: flex;
  flex-direction: column;
  gap: 3.2rem;
  
  background-color: ${({theme}) => theme.COLORS.BACKGROUND_300};

  padding: 6.4rem;
  border-radius: 1.6rem;

  >h2 {
    font-size: 3.2rem;
    font-weight: 500;

    text-align: center;

    color: ${({theme}) => theme.COLORS.WHITE_200};
  }

  >a {
    text-align: center;
    color: ${({theme}) => theme.COLORS.WHITE_200};

    font-size: 1.4rem;
    font-weight: 500;
    animation: pulsation 1s infinite backwards;
  }

  >.create-account {
    width: 100%;
    justify-content: center;
  }

  @media(max-width:900px) {
    background: none;
    
    padding: 6rem 1rem;
  }
  
` 