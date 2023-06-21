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
  padding: 5rem 12.1rem;
  margin: 0 auto;

  display: flex;
  flex-direction: column;  

  >button:first-child {
    margin-bottom: 4.2rem;
  }

  >a {
    margin-bottom: 4.2rem;
  }
  
`;