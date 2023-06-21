import styled from "styled-components"

export const Container = styled.textarea`
  width: 100%;
  height: 17.2rem;

  background-color: ${({theme}) => theme.COLORS.BACKGROUND_100};
  color: ${({theme}) => theme.COLORS.WHITE_100};

  border: none;
  resize: none;

  border-radius: .8rem;
  padding: .9rem;

  outline: 0;

  &::placeholder {
    color: ${({theme}) => theme.COLORS.GRAY_100};

    font-size: 1.6rem;
    font-weight: 400;

  }
`;