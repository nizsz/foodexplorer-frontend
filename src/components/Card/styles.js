import styled from "styled-components"
import { Link } from "react-router-dom";

export const Container = styled.button`
  max-width: 30.4rem;
  background-color: ${({theme}) => theme.COLORS.BACKGROUND_900};
  border: none;
  border-radius: 1rem;

  padding: 6.5rem 2.4rem;

  position: relative;
  
  >main {
    display: grid;
    place-content: center;

    position: relative;

    img {
      place-self: center;
      width: 17rem;
      height: 17rem;

      border-width: 2px;
      border-radius: 50%;
      border-style: solid;
      border-color: ${({theme}) => theme.COLORS.GRAY_100};
    }

    strong {
      color:  ${({theme}) => theme.COLORS.WHITE_200};

      margin-top: 1.5rem;

      font-size: 2.4rem;
      font-weight: 700;

      white-space: nowrap;
    }

    span {
      font-size: 1.4rem;
      font-weight: 400;

      color:  ${({theme}) => theme.COLORS.GRAY};

      margin: 1.5rem 0;
    }

    h3 {
      font-size: 3.2rem;
      font-weight: 400;

      color:  ${({theme}) => theme.COLORS.BLUE};
    }
     

    svg {
      position: absolute;
      top: -4.6rem;
      right: -0.4rem;

      color:  ${({theme}) => theme.COLORS.WHITE_200};
      cursor: pointer;
    }
  }
`
