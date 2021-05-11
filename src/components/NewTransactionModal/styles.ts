/* eslint-disable @typescript-eslint/no-explicit-any */
import styled from 'styled-components';
import { darken, transparentize } from 'polished';

export const Container = styled.form`
  fieldset {
    border: none;

    h2 {
      color: ${props => props.theme.colors.textTitle};
      margin-bottom: 3.2rem;
    }

    input {
      width: 100%;
      padding: 0 2.4rem;
      height: 6.4rem;
      border: 1px solid ${props => props.theme.colors.inputBorder};
      border-radius: 0.5rem;
      background-color: ${props => props.theme.colors.inputBackground};

      &::placeholder {
        color: ${props => props.theme.colors.textBody};
      }

      & + input {
        margin-top: 1.6rem;
      }
    }

    button[type='submit'] {
      width: 100%;
      color: ${props => props.theme.colors.shape};
      background-color: ${props => props.theme.colors.green};
      padding: 0 2rem;
      border-radius: 0.5rem;
      height: 6.4rem;
      margin-top: 2.4rem;

      transition: background-color 0.1s;

      &:hover {
        background-color: ${props => darken(0.05, props.theme.colors.green)};
      }
    }
  }
`;

export const TransactionTypeContainer = styled.div`
  margin: 1.6rem 0;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 0.8rem;
`;

interface IRadioBox {
  isActive: boolean;
}

export const RadioBox = styled.button<IRadioBox>`
  height: 6.4rem;
  border: 1px solid ${props => props.theme.colors.inputBorder};
  border-radius: 0.5rem;

  display: flex;
  align-items: center;
  justify-content: center;

  transition: border-color 0.1s, background-color 0.1s;

  &.green {
    background-color: ${props =>
      !props.isActive
        ? 'transparent'
        : transparentize(0.9, props.theme.colors.green)};
    border-color: ${props => transparentize(0.8, props.theme.colors.green)};
  }

  &.red {
    background-color: ${props =>
      !props.isActive
        ? 'transparent'
        : transparentize(0.9, props.theme.colors.red)};
    border-color: ${props => transparentize(0.8, props.theme.colors.red)};
  }

  &:hover.green {
    border-color: ${props => transparentize(0.5, props.theme.colors.green)};
  }

  &:hover.red {
    border-color: ${props => transparentize(0.5, props.theme.colors.red)};
  }

  img {
    width: 2rem;
    height: 2rem;
  }

  span {
    display: inline-block;
    margin-left: 1.6rem;
    color: ${props => props.theme.colors.textTitle};
  }
`;
