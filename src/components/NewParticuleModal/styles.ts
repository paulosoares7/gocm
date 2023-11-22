import { darken } from "polished";
import styled from "styled-components";

export const Container = styled.form`

  h2 {
    color: var(--title);
    font-size: 1.5rem;
    margin-bottom: 1rem;
  }

  input {
    width: 100%;
    padding: 0 1.5rem;
    height: 3rem;

    border-radius: 0.25rem;

    border: 1px solid #d7d7d7;
    background: var(--secundary);
    color: var(--title);

    &::placeholder {
      color: var(--title)
    }

    & + input {
      margin-top: 0.5rem;
    }
  }

  
  .buttonBox{
    display: flex;
    align-items: center;
    justify-content: space-between;

    margin-top: 1rem;
    button {
    
    width: 11rem;
    padding: 0;
    height: 3.135rem;
    background: var(--yellow);

    color: #fff;
    border-radius: 0.25rem;
    border: 0;
    font-size: 1rem;
    
    
    transition: 0.4s;
    
    &:hover{
      background: ${darken(0.1, '#EBA417')}
    }
    
    & + button {
      background: red;
      &:hover {
        background: ${darken(0.1, 'red')}
      }
    }
  }
  }
`