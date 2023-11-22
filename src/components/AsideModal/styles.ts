import { darken, lighten } from "polished";
import styled from "styled-components";

export const Content = styled.aside`
  width: 100%;
  height: 100%;
  max-height: 768px;
  background: var(--secundary);

  h3 {
    color: var(--title);
    margin: 0.35rem 1rem;
  }
  h4 {
    color: var(--title);
    margin: 1rem 1rem 0;
  }
  h5 {
    & + h5 {
      transition: color 0.4s;
      &:hover {
        color: ${lighten(0.1, "#EBA417")};
      }
    }
  }
  button {
    width: 2rem;
    height: 2rem;

    border: none;
    padding: 0.25rem 0;

    background: transparent;
    color: var(--yellow);

    position: absolute;
    right: 0;
    top: 7px;
    z-index: 10;

    transition: 0.4s;
    &:hover {
      color: ${darken(0.1, "#EBA417")};
    }

    svg {
      width: 1.5rem;
      height: 1.5rem;
    }
  }
  input[type="range"] {
    height: 2.5rem;

    border: 3px solid var(--yellow);
    margin: 0 1rem;
    border-right: none;

    padding: 0 0.5rem 0 0.175rem;
    outline: none;
    color: var(--secundary);
  }

  .Parameters-CM {
    position: relative;

    border-bottom: 1px solid #008b8b;

    margin: 0 auto;
    padding: 0.5rem;

    button {
      height: 2.5rem;
      width: 2.5rem;
      background: var(--yellow);

      border: 1px solid var(--yellow);
      border-radius: 50%;

      position: absolute;
      right: 1rem;
      top: 4rem;

      transition: 0.4s;
      &:hover {
        background-color: ${darken(0.1, "#EBA417")};
      }

      img {
        margin: 0 auto;
      }
    }
    .range {
      position: relative;

      input {
        display: block;
        -webkit-appearance: none;
        background: #bdc3c7;
        width: 9rem;
        height: 0.3125rem;
        border-radius: 5px;
        margin: 1rem;
        outline: 0;

        ::-webkit-slider-thumb {
          -webkit-appearance: none;
          background: var(--blue);
          width: 1rem;
          height: 1rem;
          border-radius: 50%;
          border: 2px solid white;
          transition: 0.3s ease-in-out;
          &:hover {
            background: var(--background);
            border: 2px solid var(--blue);
          }
          :active {
            transform: scale(1.6);
          }
        }
      }
      h5 {
        color: var(--title);
        position: absolute;
        top: 1.75rem;
        right: 1rem;
      }
    }
  }
  .informationCM {
    padding: 0;
    width: 100%;
    color: var(--title);
    margin: 0.5rem auto 0 0.5rem;

    display: grid;
    grid-template-columns: repeat(3, 1fr);

    gap: 0.5rem;
  }

  .valueRange {
    position: relative;
    top: 0.125rem;
    left: -0.125rem;
  }


`;
export const InputsContainer = styled.form`
  padding: 0;
  margin: 1rem auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  transition: 0.5s linear;

  input[type="submit"] {
    position: absolute;
    left: 0;
    transform: translateX(-1000%);
  }
  input[type="number"] {
    outline: none;
    border: none;
    background: transparent;
    width: 100%;
    margin-left: 0.35rem;
    border-left: 1px solid rgba(54, 123, 245, 0.5);
    color: var(--blue);
    height: 1.5rem;
    padding-left: 0.25rem;

    &::placeholder {
      color: var(--title);
    }
  }

  img {
    width: 0.5rem;
    margin-left: 0.25rem;
    cursor: pointer;
  }

  .inputContainer {
    display: flex;
    align-items: center;

    background: var(--background);
    box-shadow: 0 1px 2px 0;
    box-shadow: 0 0 15px rgba(0, 0, 0, 0.2);

    width: 15.625rem;
    padding: 0.5rem 0.75rem;

    border-radius: 50px;
  }
  svg {
    margin: 0;
    width: 2rem;
    height: 2rem;
    background: var(--background);
    border-radius: 50%;
    color: var(--yellow);
    cursor: pointer;
  }

`;
