import { darken } from "polished";
import styled from "styled-components";

export const Container = styled.header`
  background: var(--primary);
  border-bottom: 1px solid #008b8b;
  height: 3.5rem;
  margin: 0 auto;  
  padding: 0 1rem;
`;
export const Content = styled.div`
  height: 3.5rem;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;

  img {
    max-height: 40px;
  }
  .svgBox {
    width: 8.5rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    svg {
      padding: 0;
      margin: 0 auto;
      height: 2.5rem;
      width: 2.5rem;
      color: var(--blue);
      transition: filter 0.2s;
      cursor: pointer;

      &:hover {
        filter: brightness(0.8);
      }
    }
    button {
    
    width: 2.25rem;
    height: 2.25rem;

    background: var(--blue);
    padding: 0.5px 0  ;
    
    border: 3px solid var(--blue);
    
    border-radius: 50%;
    
    
    transition:  0.5s;
    &:hover {
      background-color: ${darken(0.2, "#61DAFB")};
      
    }
    svg {
      width: 1.75rem;
      height: 1.75rem;
      color: var(--primary);
     
    } 
  }
  }
  nav {
    width: 12rem;
    height: 3.5rem;
    border: 0;
    margin: 0;
    padding: 0.125rem 0.5rem;

    display: flex;
    align-items: center;
    justify-content: space-between;

    a {
      display: inline-block;
      position: relative;
      height: 3.5rem;
      padding: 0.35rem 0;
      margin: 0 0.25rem;

      transition: 0.6s;

      &:hover {
        filter: brightness(0.8);
      }

      svg {
        padding: 0;
        margin: 0 auto;
        width: 2.5rem;
        height: 3rem;
        color: var(--blue);
      }
      &.active::after {
        content: "";
        height: 3px;
        border-radius: 3px 3px 0 0;
        width: 100%;

        position: absolute;
        bottom: 1px;
        left: 0;
        background: var(--blue);
      }

      transition: 0.6s;

      &:hover::after {
        content: "";
        height: 3px;
        border-radius: 3px 3px 0 0;
        width: 100%;

        position: absolute;
        bottom: 1px;
        left: 0;
        background: var(--blue);
      }
    }
  }
@media (max-width: 400px) {
    img {
      display: none;
    }
    .svgBox{
      width: 10rem
    }
   
  }
  
`;
