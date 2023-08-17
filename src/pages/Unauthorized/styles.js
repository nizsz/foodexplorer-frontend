import styled from "styled-components";

export const Container = styled.div`
  height: 90vh;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  gap: 1rem;

  >h1 {
    font-size: 6rem;
    color: ${({theme}) => theme.COLORS.WHITE_200};
    font-weight: 500;

    text-transform: uppercase;
  }
  >p {
    font-size: 3rem;
    color: ${({theme}) => theme.COLORS.GRAY_100};
  }

  >a{
    color: ${({theme}) => theme.COLORS.WHITE_200};
    font-size: 1.9rem;
  }

  >a:hover {
    transition: 1s;
    transform: scale(1.4);
  }

  @media (max-width: 800px) {
    >h1 {
      font-size: 3rem;
    }
    
    >p {
      font-size: 2rem;
    }
  }
`;