import styled from "styled-components";
 
export const Container = styled.header`
  grid-area: header;
  
  width: 100%;
  height: 9.6rem;
  padding: 2.4rem 8rem;

  display: flex;
  gap: 3rem;
  align-items: center;
  justify-content: center;

  background-color: ${({theme}) => theme.COLORS.BACKGROUND_400};

  >input {
    width: 100%;
  }

  >header {
    display: flex;

    img {
        width: 3rem;
        height: 3.4rem;

        margin-right: 1rem;
      }

    h2 {
      display: grid;
      white-space: nowrap;
  
      font-weight: 500;
  
      span {
        margin-left: .8rem;
        height: 1rem;
        
        font-size: 1.2rem;
        color: ${({theme}) => theme.COLORS.BLUE};
        text-align: end;
      }
    }
  }

  .menu, .hide, .receipt {
      display: none;
    }


  @media (max-width: 700px) {
    padding: 2rem 3rem;
    justify-content: left;
    justify-content: ${({isAdmin}) => !isAdmin ? "space-between" : "left"};
    
    >header {
      display: flex;
      align-items: center;

      img {
        margin-left: ${({isAdmin}) => isAdmin ? "110px" : "0px" };
      }
      h2 {
        display: flex;
        align-items: center;
        white-space: nowrap;
  
        
        span {      
          height: 1rem;
        }
      }
    }
    .search {
      display: none;
      position: absolute;
      width: 1px;
      height: 1px;
      padding: 0;
      margin: -1px;
      overflow: hidden;
      clip: rect(0,0,0,0);
      white-space: nowrap;
      border-width: 0;
    }

    .menu, .receipt {
      display: block;
      cursor: pointer;
    }

    .hide {
      display: none;
    }


    >div:nth-child(4) {
      display: none;
    }

    >svg{
      display: none;
    }

    >a{
      display: none;
      button {
        display: none;
      }
    }

  }
`;

export const Logout = styled.button`
    border: none;
    background: none;
    color: ${({theme}) => theme.COLORS.WHITE_100};

    @media(max-width: 700px) {
      display: none;
    }
`;

export const Menu = styled.div`
   @media (max-width: 700px) {
    position: absolute;
    display: grid;
    >header {
      grid-area: header;
      width: 100%;
      height: 9.6rem;
      
      background-color: ${({theme}) => theme.COLORS.BACKGROUND_400};
      padding: 2rem 3rem;

      h1 {
        display: flex;
        align-items:center ;
        gap: 1.6rem;

        font-family: Roboto;
        font-size: 2.1rem;
        font-weight: 400;
        color: ${({theme}) => theme.COLORS.WHITE_100};
        

        svg {
          color: ${({theme}) => theme.COLORS.WHITE_100};
        }
      }
    }

    >strong {
      font-family: Poppins;
      font-size: 1.4rem;
      font-weight: 300;

      color: ${({theme}) => theme.COLORS.WHITE_200};
      border-bottom: 1px solid ${({theme}) => theme.COLORS.BACKGROUND_50};
    }
  }
`;