import styled from "styled-components";

export const Container = styled.div`
  height: 100%;

  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 0.5rem;

  h3 {
    font-size: 0.75rem;
    font-weight: 400;
    margin-left: 1rem;
    color: var(--blue);
  }
  @media (max-width: 860px) {
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    gap: 0.25rem;
  }
`;
export const Content = styled.div`
  padding: 1rem;
  margin: 0 auto;
  border: 1px solid var(--blue-dark);
  background: var(--primary);

  border-radius: 15px;

  height: 19.25rem;
  width: 33rem;

  @media (max-width: 768px) {
    height: 31rem;
    width: 45rem;
  }
  @media (max-width: 375px) {
    height: 25rem;
    width: 25rem;
  }
  @media (max-width: 360px) {
    width: 24rem;
  }
`;
