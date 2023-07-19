import styled from "styled-components"

export const Container = styled.section`
  display: grid;
  margin-top: 4.8rem;

  >h3{
    font-size: 3rem;
    font-weight: 500;

    padding-bottom: 2.3rem;

    color: ${({theme}) => theme.COLORS.WHITE_100};
  }

  >main {
    
    max-width: 1100px;
    
    display: flex;
    cursor: grab;
    overflow: hidden;

    div{
      display: flex;
      gap: 2.5rem;
    }

  }

  @media(max-width:700px) {
  
    >main {
      max-width: 50rem;
    }
  }
`;