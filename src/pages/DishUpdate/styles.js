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

export const Form = styled.form`
  padding: 5rem 12.1rem;
  margin: 0 auto;

  display: grid;

  >header {

    
    h1 {
      font-size: 3.2rem;
      font-weight: 500;

      color: ${({theme}) => theme.COLORS.WHITE_200};
      padding: 2.4rem 0 3.2rem;
      
    }
  }

  
  .elements {
    display: grid;
    gap: 3rem;

    grid-template-areas: 
      "image name name category"
      "ingredients ingredients ingredients price"
      "textarea textarea textarea textarea"
    ;

    grid-template-columns: 30rem auto;


  section label {
    width: 100%;

    color: ${({theme}) => theme.COLORS.WHITE_100};
    background-color: ${({theme}) => theme.COLORS.BACKGROUND_100};

    padding: 1.2rem 3.2rem;
    border-radius: .8rem;
    height: 4.8rem;

    display: flex;
    align-items: center;

    font-size: 1.4rem;
    font-weight: 500;

    cursor: pointer;

    svg {
      margin-right: .9rem;
    }

  }

  section input[type="file"]{
    display: none;
  }

  section select {
    width: 100%;

    -webkit-appearance: none;
    -moz-appearance: none;
    -ms-appearance: none;
    appearance: none;
    outline: 0;
    box-shadow: 0;

    border: none;
    border-radius: .8rem;

    background-color: ${({theme}) => theme.COLORS.BACKGROUND_100};
    color: ${({theme}) => theme.COLORS.GRAY};
    
    background-image: url("data:image/svg+xml,%3Csvg width='10' height='7' viewBox='0 0 10 7' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M1 1.64984L5 5.61617L9 1.64984' stroke='%239C98A6' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E%0A");
    background-position: right 1.6rem top 50%;
    background-repeat: no-repeat;

    height: 4.8rem;
    padding: 1.2rem 3.2rem;

    display: flex;
    align-items: center;

    cursor: pointer;
  }

  section:nth-child(1) {
    grid-area: image;
    
  }

  section:nth-child(2) {
    grid-area: name;
  }

  section:nth-child(3) {
    grid-area: category;
  }

  section:nth-child(4) {
    grid-area: ingredients;
  }

  section:nth-child(5) {
    grid-area: price;
  }

  section:nth-child(6) {
    grid-area: textarea;
  }

  }

  .ingredients {
    display: flex;
    align-items: center;
    gap: 1.2rem;

    background-color: ${({theme}) => theme.COLORS.BACKGROUND_100};
    border-radius: .8rem;
    height: 4.8rem;

    padding: .8rem;
  }

  .buttons {
    display: flex;
    justify-content: end;
    gap: 3.2rem;

    margin-top: 3.2rem;

    button:first-child{
      background-color: ${({theme}) => theme.COLORS.BACKGROUND_200};
    }

    button:last-child{
      background-color: ${({theme}) => theme.COLORS.TOMATO};
    }
  }

  @media (max-width: 700px) {
    padding: 3.2rem;

    .elements {
      gap: 2rem;

      grid-template-areas: 
        "image image image"
        "name name name"
        "category category category"
        "ingredients ingredients ingredients"
        "price price price"
        "textarea textarea textarea"
      ;

      .name, .price, section label, textarea {
        background-color: ${({theme}) => theme.COLORS.BACKGROUND_200};
      }

      .ingredients {
        background-color: ${({theme}) => theme.COLORS.BACKGROUND_200};
      }
    }

   .buttons {
    justify-content: space-between;

    button:first-child{
      justify-content: center;
      width: 50%;
    }

    button:last-child{
      justify-content: center;
      width: 50%;
    }
   }
  }

  `;