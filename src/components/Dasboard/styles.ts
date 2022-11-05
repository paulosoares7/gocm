import { darken } from "polished";
import styled from "styled-components";

export const Container = styled.div`
  height: calc(100vh - 3.5rem);
  max-height: 768px;
  max-width: 1920px;

  padding: 0.5rem 0;
  margin: 0 auto;

  display: flex;
  align-items: center;
  justify-content: center;

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

  @media (max-width: 768px) {
    height: calc(100vh - 3.5rem);
    max-height: 1024px;

    button {
      left: 5px;
      top: -463px;
      width: 2.5rem;
      height: 2.5rem;
    }
  }

  @media (max-width: 375px) {
    padding: 0.25rem 0;
    display: flex;
    align-items: center;
    justify-content: center;

    button {
      position: fixed;
      top: 7px;
      left: 15px;
    }
  }
`;
export const ContentArticle = styled.article`
  width: calc(100% - 4rem);
  height: 100%;

  padding: 0;

  @media (max-width: 414px) {
    width: 100%;
  }
`;