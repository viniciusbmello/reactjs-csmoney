import styled from 'styled-components';

export const Container = styled.tr`
  & {
    td {
      border: 0;
      background: ${props => props.theme.colors.shape};
      padding: 1.6rem 3.2rem;
      color: var(--text-body);
      border-radius: 0.5rem;

      &:first-child {
        color: ${props => props.theme.colors.textTitle};
      }
    }

    &.withdraw {
      td.value {
        color: ${props => props.theme.colors.red};
      }
    }

    &.deposit {
      td.value {
        color: ${props => props.theme.colors.green};
      }
    }
  }

  @media (max-width: 720px) {
    & {
      td {
        display: inline-block;
        width: 100%;
        border-radius: 0;
        padding: 0 3.2rem 0;
      }

      td:first-child {
        padding-top: 1.6rem;
        border-radius: 0.5rem 0.5rem 0 0;
      }

      td.value {
        font-size: 3.2rem;
        padding-bottom: 1.6rem;
      }

      td:last-child,
      td:nth-last-child(2) {
        width: 50%;
        color: ${props => props.theme.colors.textBody};
        padding-bottom: 1.6rem;
      }

      td:nth-last-child(2) {
        border-radius: 0 0 0 0.5rem;
      }

      td:last-child {
        text-align: right;
        border-radius: 0 0 0.5rem 0;
      }
    }
  }
`;
