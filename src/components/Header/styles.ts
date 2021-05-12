import { lighten } from 'polished';
import styled from 'styled-components';

export const Container = styled.header`
  background: ${props => props.theme.colors.primary};

  h6 {
    text-align: right;
    padding-top: 1rem;
    padding-right: 1rem;
    color: ${props => props.theme.colors.shape};
  }
`;

export const Content = styled.div`
  max-width: ${props => props.theme.maxWidth};
  margin: 0 auto;

  padding: 3rem 1.6rem 12rem;
  display: flex;
  align-items: center;
  justify-content: space-between;

  .logo {
    display: flex;
    align-items: center;

    h1 {
      color: ${props => props.theme.colors.shape};
      padding-left: 1.6rem;
      user-select: none;
    }
  }

  button {
    color: ${props => props.theme.colors.shape};
    background-color: ${props => props.theme.colors.primaryLight};
    padding: 0 3.2rem;
    border-radius: 0.5rem;
    height: 4.8rem;

    transition: background-color 0.1s;

    &:hover {
      background-color: ${props =>
        lighten(0.05, props.theme.colors.primaryLight)};
    }
  }
`;
