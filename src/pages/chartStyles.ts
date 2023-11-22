import styled from "styled-components";

export const ChartContainer = styled.div`
    position: absolute;
    left: 0;
    top: 0;
    padding: 0.5rem 0;
    width: 100%;
    height: 100%;

    h1 {
        display: flex;
        align-items: center;
        height: 1.5rem;
        
        padding: 0 2rem;
        font-size: 26px;
        text-align:left;
    }
    
  @media(max-width: 400px){
      h1{
          font-size: 18px;
          justify-content: center;
      }
  }
`;
export const ChartContent = styled.div`
  display: flex;
  align-items: center;

  width: 100%;
  height: calc(100% - 1rem);
  max-height: 920px;
  

  padding: 1rem 0.5rem;
  border-top: 1px solid var(--blue);

  @media (max-width: 450px) {
    padding: 0;
    min-height: 730px;
  }
    
`;
export const ResponsiveContent = styled.div`
  height: 100%;
  width: 100%;
  min-width: 388px;
  max-height: 41rem;
  max-width: 85rem;
  padding: 0.75rem;
  margin: 0 auto;


  border: 1px solid var(--blue-dark);
  border-radius: 15px;

  background: var(--primary);
  
  @media (max-width: 1080px) {
    max-width: 76rem;
    max-height: 48rem;
    
  } 
  @media (max-width: 450px) {
    max-height: 700px;
    max-width: 380px;
  }
  


`;
