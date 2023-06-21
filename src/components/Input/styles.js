import styled from "styled-components"

export const Container = styled.div`
  width: 100%;

  display: flex;
  align-items: center;

  background-color: ${({theme}) => theme.COLORS.BACKGROUND_100}; 
  color: ${({theme}) => theme.COLORS.GRAY_100};

  border-radius: .5rem;

  >input {
    width: 100%;
    height: 4.8rem;

    padding: 1.6rem;

    color: ${({theme}) => theme.COLORS.WHITE_200};
    background: transparent;
    border: none;
    outline: none;
    
    &::placeholder{
      color: ${({theme}) => theme.COLORS.GRAY_100}; 
  
      font-size: 1.6rem;
      font-weight: 400;
    }
  }

  >svg {
    color: ${({theme}) => theme.COLORS.GRAY_100}; 
    margin-left: 1.4rem;
  }


  >input[type="number"]::-webkit-outer-spin-button,
  input[type="number"]::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
}

`