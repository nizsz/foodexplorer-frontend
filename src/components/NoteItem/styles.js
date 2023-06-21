import styled from "styled-components"

export const Container = styled.div`
  display: flex;
  align-items: center;

  background-color: ${({theme, isNew}) => isNew ? "transparent" : theme.COLORS.GRAY_200};
  color: ${({theme}) => theme.COLORS.WHITE_100};

  border: ${({theme, isNew}) => isNew ? `1px dashed ${theme.COLORS.GRAY_200}` : "none"};
  border-radius: .8rem ;

  padding-right: 1.4rem;

  >button {
    border: none;
    background: none;

    place-self: center ;

    padding-top: 5px;
  }

  .button-delete {
    color: ${({theme}) => theme.COLORS.WHITE_100};
  }

  .button-add {
    color: ${({theme}) => theme.COLORS.GRAY_100};

  }

  >input  {
    width: 100%;
    max-width: 11.6rem;

    height: 3.2rem;

    padding: .8rem 1.6rem;
    outline: 0;

    background: none;
    border: none;

    color: ${({theme}) => theme.COLORS.WHITE_100};

    font-size: 1.6rem;
    font-weight: 500; 
    font-display: inherit;

    &::placeholder {
      color: ${({theme}) => theme.COLORS.GRAY_100};
    }

  }

`;