import styled from "styled-components"

export const Container = styled.div`
  
    width: 100%;
    height: 100vh;
    position: absolute;
    z-index: 1;
    left: 0;
    top: 0;
    display: flex;
    flex-direction: column;

    background-color: ${({theme}) => theme.COLORS.BACKGROUND_500};
   

    >header {
      display: flex;
      align-items: center;
      grid-area: header;
  
      width: 100%;
      height: 9.6rem;
      padding: 2.8rem;
      
      background-color: ${({theme}) => theme.COLORS.BACKGROUND_400};
      
      h1 {
        display: flex;
        align-items:center ;
        gap: 1.6rem;

        font-family: Roboto;
        font-size: 2.1rem;
        font-weight: 400;
        color: ${({theme}) => theme.COLORS.WHITE_100};
        

        svg {
          cursor: pointer;
          color: ${({theme}) => theme.COLORS.WHITE_100};
          
        }
      }
    }

    >main {
      display: flex;
      flex-direction: column;
      
      padding: 3rem 2rem ;
      
      
      strong {
        
        display: flex;
        
        cursor: pointer;

        font-family: Poppins;
        font-size: 2.2rem;
        font-weight: 300;
  
        color: ${({theme}) => theme.COLORS.WHITE_200};
  
        border-bottom-color: ${({theme}) => theme.COLORS.BACKGROUND_50};
        border-bottom-style: solid;
        border-bottom-width: 1px;
        
        
      }

      strong:nth-child(2) {
        margin-top: 3rem;
      }

      strong:last-child {
        margin-top: 2.4rem;
      }

     
      

    }
   

  
`