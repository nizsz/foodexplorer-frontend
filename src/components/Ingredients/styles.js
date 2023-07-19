import styled from "styled-components"

export const Container = styled.span`
  font-family: 'Poppins';
  font-size: 1.4rem;
  font-weight: 500;
  color: ${({theme}) => theme.COLORS.WHITE_100};
  
  padding: .4rem .8rem;
  border-radius: .5rem;
  margin-right: 1.2rem;
  
  background-color: ${({theme}) => theme.COLORS.BACKGROUND_50};
  white-space: nowrap;

  @media (max-width: 700px) {
    margin-bottom: 2rem;
    
  }

  
`;