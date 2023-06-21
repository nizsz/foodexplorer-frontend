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

    button:last-child{
    margin-top: 4.8rem;
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

  
`