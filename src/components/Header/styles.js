import styled from "styled-components";

export const Container = styled.header`
  grid-area: header;
  
  width: 100%;
  height: 9.6rem;
  padding: 2.4rem 8rem;

  display: flex;
  gap: 3rem;
  align-items: center;
  justify-content: center;

  background-color: ${({theme}) => theme.COLORS.BACKGROUND_400};

  >input {
    width: 100%;
  }


`;

export const Logout = styled.button`
    border: none;
    background: none;
    color: ${({theme}) => theme.COLORS.WHITE_100};
`;