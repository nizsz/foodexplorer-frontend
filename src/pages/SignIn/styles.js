import styled from "styled-components"

export const Container = styled.div `
  width: 100%;
  height: 100vh;
  animation: day 7s infinite;
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

    animation:colorNight 7s infinite ;
  }
  }


  @keyframes day {
    0% {
      background-color: #fff;
    }

    50%{
      background-color: #000;
    }

    100%{
      background-color: white;
    }
  }

  @keyframes colorNight {
    0% {
      color: #000;
    }

    50%{
      color: white;
    }

    100%{
      color: #000;
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
  animation: background 7s infinite backwards;

  
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
  }

  >.enter {
    justify-content: center;
    width: 100%;
  }

  @keyframes background {
    0%{
      background:${({theme}) => theme.COLORS.BACKGROUND_500};
      
    } 

    50%{
      background:${({theme}) => theme.COLORS.BACKGROUND_300} ;
    
    }

    100%{
      background:${({theme}) => theme.COLORS.BACKGROUND_500} ;
    }
  }


  @media(max-width:900px) {
    background: none;
    animation: none;
    
    padding: 6rem 1rem;

    >h2, a, span{
      animation: colorNight 7s infinite;
    }
  }
  

 
` 