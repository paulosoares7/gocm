import styled from "styled-components";

export const Container = styled.div`
  
  display: grid;
  align-items: center;
  justify-items: center;
  grid-template-columns: repeat(2, 1fr);
  gap: 0.5rem;
  padding: 0.7 5rem 0.25rem 0 0;
  
  width: 100%;
  height: 100%;
  max-height: calc(1080px - 3.5rem);
  overflow-y: auto;
  
  
  @media (max-width: 1080px) {
    grid-template-columns: repeat(1, 1fr);
    grid-template-rows: repeat(4, 1fr);
    max-height: 48.2rem;
  }
  @media (max-width: 450px) {
    display: flex;
    align-items: center;
    padding: 10px 0 0 6px;
    min-height: 730px;
  }

  h3 {
    font-size: 0.75rem;
    font-weight: 400;
    margin-left: 1rem;
    color: var(--blue);
  } 
`;
export const Content = styled.div`
  height: 100%;
  width: 100%;
  max-height: 20rem;
  max-width: 42rem;
  min-width: 388px;
  
  border-radius: 15px;
  padding: 1rem;
  border: 1px solid var(--blue-dark);
  background: var(--primary);
  
  @media (max-width: 1080px) {
    max-width: 76rem;
    max-height: 42rem;    
  } 
  @media (max-width: 450px) {
    padding: 0.5rem;
    max-height: 700px;
  }
  

`;
