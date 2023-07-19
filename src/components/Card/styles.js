import styled from "styled-components"

export const Container = styled.div`
  max-width: 30.4rem;
  background-color: ${({theme}) => theme.COLORS.BACKGROUND_900};
  border: none;
  border-radius: 1rem;

  padding: 6.5rem 2.4rem 0;

  position: relative;
  
  >main {
    display: grid;
    justify-items: center;
    place-content: center;

    position: relative;

    button {
      display: grid;
      border: none;
      background: none;
    }

    button:first-child {
      position: absolute;
      top: -4.6rem;
      right: -0.4rem;
    }

    img {
      place-self: center;
      width: 17rem;
      height: 17rem;

      border-width: 2px;
      border-radius: 50%;
      border-style: solid;
      border-color: ${({theme}) => theme.COLORS.GRAY_100};
    }

    strong {
      color:  ${({theme}) => theme.COLORS.WHITE_200};

      margin-top: 1.5rem;

      font-size: 2.4rem;
      font-weight: 700;

      white-space: nowrap;
    }

    span {
      font-size: 1.4rem;
      font-weight: 400;

      color:  ${({theme}) => theme.COLORS.GRAY};

      margin: 1.5rem 0;
    }

    h3 {
      font-size: 3.2rem;
      font-weight: 400;
      padding-bottom: 6rem;

      color:  ${({theme}) => theme.COLORS.BLUE};
    }
     

    svg {
      //position: absolute;
      //top: -4.6rem;
      //right: -0.4rem;

      color:  ${({theme}) => theme.COLORS.WHITE_200};
      cursor: pointer;
    }

  }

  .card-user {
      a {
        display: grid;

        h3 {
          padding-bottom: 0;
        }

      }
    }

  .include {
    gap:2rem;
    align-items: center;
    padding: 1.5rem 0 4rem;
  }


  @media(max-width: 700px) {
    >main{
      span {
        display: none;
      }
      h3 {
        margin-top: 1.4rem;
      }
    }
    
    .card-user {
      min-width: 25rem;
    }

    .include {
      display: flex;
      flex-direction: column;
      justify-content: center;
    }
  }
  
`;


export const Subtract = styled.div`
  background: none;
  border: none;

  cursor: pointer;

  >svg {
    color: ${({theme}) => theme.COLORS.WHITE_100}; 
  }

  color:  ${({theme}) => theme.COLORS.WHITE_200};

  font-size: 2.4rem;
  font-weight: 700;

  white-space: nowrap;
`;

export const Include = styled.div`
  width: fit-content;
  background-color: ${({theme}) => theme.COLORS.RED};
  color: ${({theme}) => theme.COLORS.WHITE_100};

  font-size: 1.4rem;
  font-weight: 500;

  padding: 1.2rem 2.8rem;

  white-space: nowrap;

  border-radius: .5rem;
  border: none;
  height: 4.8rem;

  display:flex ;

  &:disabled {
    opacity: 0.5;
  }

  @media (max-width: 700px) {
    width: 100%;
    align-items: center;
    justify-content: center;
  }
`;
