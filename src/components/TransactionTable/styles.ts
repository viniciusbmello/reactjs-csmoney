import styled from 'styled-components';

export const Container = styled.div`
  margin-top: 5.6rem;

  table {
    width: 100%;
    border-spacing: 0 0.5rem;

    th {
      color: ${props => props.theme.colors.textBody};
      font-weight: 400;
      padding: 1.6rem 3.2rem;
      text-align: left;
    }

    tr {
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
  }
`;
