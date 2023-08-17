import styled from "styled-components"

export const Container = styled.div`
  display: flex;

  >main {
    display: flex;
    flex-direction: column;
    justify-content: center;

    padding-left: 4.7rem;

    h1 {
      font-size: 4rem;
      font-weight: 500;

  
      color: ${({theme}) => theme.COLORS.WHITE_100};
    }
    p {
      margin: 2.4rem 0;
      font-size: 2.4rem;
      font-weight: 400;
  
      color: ${({theme}) => theme.COLORS.WHITE_200};
    }

   // button:last-child{
    //margin-top: 4.8rem;
  //}

  a {
    margin-top: 4.8rem;

    display: flex;
    align-items:center;

    strong {
      display: flex;
      align-items: center;
      padding: 0 1.2rem;

      font-size: 2.5rem;
      font-weight: 500;

      color: ${({theme}) => theme.COLORS.WHITE_200};
      
    }
  }

  }

  >img {
    width: 37rem;
    height: 37rem;

    border-radius: 50%;

    border-width: 2px;
    border-style: solid;
    border-color: ${({theme}) => theme.COLORS.GRAY_100};
    
  }

  
  @media(max-width:700px) {
    display: flex;
    flex-direction: column;
    place-items: center;
    align-self: center;

    >img {
      width: 30rem;
      height: 30rem;
    }

    >main {
      place-items: center;

      p {
        margin: .4rem 0 2.4rem; 
      }

      section {
        display: flex;
        flex-wrap: wrap;
        width: 28rem;
        
      }

      a {
        margin-top: 1.8rem;
        button {
          justify-content: center;
          width: 100%;
        }
      }
    }
  }
`;

export const Add = styled.button`
  background: none;
  border: none;

  >svg {
    margin-right: 3.3rem;
    color: ${({theme}) => theme.COLORS.WHITE_100};
  }
`;

export const Subtract = styled.button`
  background: none;
  border: none;

  >svg {
    color: ${({theme}) => theme.COLORS.WHITE_100};
    
  }
`;