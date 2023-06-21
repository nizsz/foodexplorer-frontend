import styled from "styled-components"

export const Container = styled.button`
  display: flex;
  align-items: center;

  background: none;
  border: none;

  font-size: 2.4rem;
  font-weight: 700;

  color: ${({theme}) => theme.COLORS.WHITE_200};

  >svg {
    color: ${({theme}) => theme.COLORS.WHITE_100};
  }
`;