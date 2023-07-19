import styled from "styled-components"

export const Container = styled.button`
  width: fit-content;
  background-color: ${({theme}) => theme.COLORS.RED};
  color: ${({theme}) => theme.COLORS.WHITE_100};

  font-size: 1.4rem;
  font-weight: 500;

  padding: 1.2rem 3.8rem;

  white-space: nowrap;

  border-radius: .5rem;
  border: none;
  height: 4.8rem;

  display:flex ;
  
  >svg {
    margin-right: .8rem ;
  }

  &:disabled {
    opacity: 0.5;
  }
`;