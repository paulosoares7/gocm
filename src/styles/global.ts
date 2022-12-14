import { transparentize } from "polished";
import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

  :root {
    --background: #444444;
    --primary: #000000;
    --secundary: #30323D;
    --title: #E1E1E6;
    --yellow: #EBA417;
    --blue: #61DAFB;
    --blue-dark: #008B8B;
    --green: #04D361;
  }
  
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box

  }

  body {  
      background:  var(--background);
      -webkit-font-smoothing: antialiased;
      max-width: 1920px;
      margin: 0 auto;
    }

  html {
    @media(max-width: 1080px){
      font-size: 93.75%;
    }
    @media(max-width: 1080px){
      font-size: 87.5%;
    }
  }

  h1 {
    color: var(--title);
  }

  button {
    cursor: pointer
  }

  [disabled] {
    opacity: 0.6;
    cursor: not-allowed
  }

  ::-webkit-scrollbar {
    width: 10px;
    height: 10px;
    background: var(--blue-dark);
  }
  ::-webkit-scrollbar-track {
    background: var(--blue-dark);
  }
  ::-webkit-scrollbar-track-piece {
    background: ${transparentize(0.1, "#30323D")};
  }
  ::-webkit-scrollbar-thumb {
      background: var(--blue-dark);
      border-radius: 5px;
  }
  ::-webkit-scrollbar-corner {
      background: var(--blue-dark);
      border-radius: 5px;
  }
 
  input[type=number]::-webkit-inner-spin-button,
  input[type=number]::-webkit-outer-spin-button {
    -webkit-appearance: none;
   
  }

  .react-modal-overlay {
    background: rgba(0,0,0,0.5);
    max-width: 1920px;
    max-height: 768px;
    margin: 0 auto;

    position: fixed;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    

    display: flex;
    align-items: center;
    justify-content: center;

    @media (max-width: 768px) {
      
      max-height:1024px;
    }

  }
  
  .react-modal-content {
    width: 27rem;
    max-width: 576px;
    background: var(--blue-dark);
    
    padding: 2rem;
    position: relative;
    border-radius: 0.24rem;
    
    @media (max-width: 768px) {
      
      margin-bottom: 25%;
    }
    @media (max-width: 375px) {
      width: 25rem;
      text-align: center;
      margin-bottom: 25%;
      padding: 1.125rem;
    }
  }
  .react-modal-overlay-aside {
    background: rgba(0,0,0,0.5);
    max-width: 1920px;
    max-height:768px;
    
    position: fixed;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content:left;
    
    @media (max-width: 768px) {
      
      max-height:1024px;
    }
  }
  .react-modal-content-aside {
    width: 16rem;
    height: calc(100vh - 3.5rem);
    max-height: 768px;  
    
    padding: 0;
    position: relative;
    
    top: 28px;
    bottom: 0;
    
    @media (max-width: 768px) {
      
      height: calc(100vh - 42px);
      max-height:1024px;
    }
    @media (max-width: 375px) {
      
      height: 100%;
      width: 100%;
      top: 0;
    }

  }
`;
// global styles of charts
export const ChartContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  height: 100%;
  margin: 0 auto;
  padding: 0.25rem;

  h1 {
    font-size: 30px;
    margin-left: 2.5rem;
  }

  @media (max-width: 768px) {
    padding: 0.25rem 0.25rem 1rem 0.25rem;
  }
  @media (max-width: 375px) {
    padding: 0;

    h1 {
      text-align: center;
      margin-left: 0;
    }
  }
`;
export const ChartContent = styled.div`
  width: 100%;

  height: calc(100% - 0.5rem);

  padding: 1.25rem 0;
  margin: 0 auto;
  border-top: 1px solid var(--blue);

  overflow-y: auto;

  @media (max-width: 768px) {
    height: calc(100% - 2.5rem);
  }
  @media (max-width: 375px) {
    padding: 1.25rem 0.25rem;
    margin: 0 auto;
  }
`;
export const ResponsiveContent = styled.div`
  height: 100%;

  padding: 0.75rem;
  margin: 0 auto;

  border: 1px solid var(--blue-dark);
  border-radius: 15px;

  background: var(--primary);

  @media (max-width: 768px) {
    height: 90%;
  }
  @media (max-width: 414px) {
    height: 80%;
  }
`;
