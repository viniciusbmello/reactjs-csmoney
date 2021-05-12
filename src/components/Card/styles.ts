import styled from 'styled-components';

export const Container = styled.div`
  background: ${props => props.theme.colors.shape};
  padding: 2.4rem;
  border-radius: 0.5rem;
  color: ${props => props.theme.colors.textTitle};

  @media (max-width: 720px) {
    width: 80%;
    flex: 0 0 auto;

    &:first-child {
      margin-left: 3.2rem;
    }

    &:last-child {
      position: relative;
      &::after {
        position: absolute;
        content: '';
        right: -3.2rem;
        width: 3.2rem;
        height: 100%;
      }
    }
  }

  header {
    display: flex;
    align-items: center;
    justify-content: space-between;

    h4 {
      font-weight: 400;
      text-transform: capitalize;
    }
  }

  p {
    margin-top: 1.6rem;
    font-size: 3.2rem;
  }

  p.income {
    color: ${props => props.theme.colors.green};
  }

  p.outcome {
    color: ${props => props.theme.colors.red};
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
