import styled from 'styled-components'

export const Container = styled.header`
  background: var(--primary);
`;

export const Content = styled.div`
  max-width: var(--max-width);
  margin: 0 auto;

  padding: 4.8rem 1.6rem 12rem;
  display: flex;
  align-items: center;
  justify-content: space-between;

  .logo {
    display: flex;
    align-items: center;

    h1 {
      color: var(--shape);
      padding-left: 1.6rem;
      user-select: none;
    }
  }

  button { 
    color: var(--shape);
    background-color: var(--primary-light);
    padding: 0 3.2rem;
    border-radius: 0.5rem;
    height: 4.8rem;

    transition: filter 0.1s;

    &:hover {
      filter: brightness(1.1) saturate(1.1);
    }
  }
`;