import { darken } from "polished";
import styled from "styled-components";

export const Container = styled.div`
  
  position: relative;
  height: calc(100vh - 3.5rem);
  max-height: 768px;

  button {
    position: relative;
    left: 0;
    top: -330px;
    width: 2.25rem;
    height: 2.25rem;

    background: transparent;
    padding: 0.25rem 0;

    border: 1px solid var(--yellow);

    color: var(--yellow);
    border-radius: 50%;
    svg {
      width: 1.5rem;
      height: 1.5rem;
    }

    transition: 0.3s;
    &:hover {
      color: #000000;
      background: ${darken(0.1, "#EBA417")};
    }
  }

`;
export const ContentArticle = styled.article`
  width: 100%;
  height: 100%;

  padding: 0;

`;