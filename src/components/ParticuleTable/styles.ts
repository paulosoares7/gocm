import { darken, lighten } from "polished";
import styled from "styled-components";

export const Container = styled.div`
  padding: 0.5rem;
  height: 24.5rem;
  overflow-y: auto;

  @media (max-width: 768px) {
    height: 37rem;
  }
  @media (max-width: 375px) {
    display: grid;
    gap: 0.5rem;

    grid-template-rows: repeat(5, 1fr);
    grid-template-columns: repeat(1, 1fr);
  }
`;

export const List = styled.div<{ isBackground: string }>`
  position: relative;

  background: var(--primary);

  border: 1px solid var(--yellow);
  border-radius: 0.5rem;
  margin: 0.75rem auto;
  padding: 0 0.75rem;
  height: 6.5rem;

  table {
    color: var(--title);

    width: 100%;
    height: 100%;
    padding: 0;
    text-align: center;
  }
  th {
    padding: 0 0.5rem;
    & + th {
      width: 4rem;
      padding: 0;
    }
    .buttonContainer {
      display: flex;
      align-items: center;
      justify-content: right;
      gap: 0.25rem;
      button {
        position: relative;

        top: 0;
        right: 0;
        width: 1.5rem;
        height: 1.5rem;
        border: none;
        svg {
          width: 1.25rem;
          height: 1.25rem;
          color: ${darken(0.3, "#04D361")};
          transition: color 0.2s;

          &:hover {
            color: ${lighten(0.1, "#04D361")};
          }
        }
      }
    }
  }
  tr {
    font-weight: 400;
    text-align: left;
  }
  tbody {
    tr {
      font-weight: 400;
      text-align: left;
      padding: 0 6rem;
    }
  }
  h3::after {
    content: "";
    height: 1px;
    width: 1px;
    border-radius: 50%;

    position: absolute;
    padding: 0.75rem;
    top: 6px;
    left: 7px;
    background: ${(isBackground) => isBackground.isBackground};
  }

`;
