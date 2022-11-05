import styled from "styled-components";

export const Container = styled.header`
  background: var(--primary);
  border-bottom: 1px solid #008b8b;
  height: 3.5rem;
`;
export const Content = styled.div`
  max-width: 1220px;
  height: 3.5rem;
  margin: 0 auto;

  padding: 0 2rem;

  display: flex;
  align-items: center;
  justify-content: space-between;

  img {
    max-height: 40px;
  }
  .svgBox {
    width: 7rem;
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
  }

  nav {
    width: 12rem;
    height: 3.5rem;
    border: 0;
    margin: 0;
    padding: 0.125rem 0.5rem;

    display: flex;
    align-items: center;
    justify-content: center;

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

  @media (max-width: 375px) {
    img {
      display: none;
    }
    nav {
      margin-left: 3.5rem;
      margin-right: 1rem;
    }
  }
`;
