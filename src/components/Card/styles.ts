import styled from 'styled-components';

export const Container = styled.div`
  background: ${props => props.theme.colors.shape};
  padding: 2.4rem;
  border-radius: 0.5rem;
  color: var(--text-title);

  header {
    display: flex;
    align-items: center;
    justify-content: space-between;

    h4 {
      font-weight: 400;
    }
  }

  p {
    margin-top: 1.6rem;
    font-size: 3.2rem;
  }

  &:last-child {
    color: ${props => props.theme.colors.shape};
  }

  &:last-child.green {
    background: ${props => props.theme.colors.green};
  }

  &:last-child.red {
    background: ${props => props.theme.colors.red};
  }
`;
