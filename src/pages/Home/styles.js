import styled from "styled-components"

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  display: grid;
  grid-template-rows: 9.6rem auto;
  grid-template-areas: 
    "header"
    "content"
    "footer"
  ;

  >main {
    grid-area: content;
    overflow-y: auto;
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;

  padding: 5rem 12.1rem;
  margin: 0 auto;

  >img {
    width: 100%;
  }


`
