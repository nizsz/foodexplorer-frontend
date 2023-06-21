import styled from "styled-components"

export const Container = styled.footer`
  grid-area: footer;
  background-color: ${({theme}) => theme.COLORS.BACKGROUND_400};

  width: 100%;
  height: 9.6rem;

  padding: 2.4rem 8rem;

  display: flex;
  justify-content: space-between;
  align-items: center;
  place-self: end;

  >p{
    font-size: 1.4rem;
    font-weight: 400;

    color: ${({theme}) => theme.COLORS.WHITE_200};
  }

`;