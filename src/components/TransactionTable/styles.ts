import styled from 'styled-components'

export const Container = styled.div`
  margin-top: 5.6rem;

  table {
    width: 100%;
    border-spacing: 0 0.5rem;

    th { 
      color: var(--text-body);
      font-weight: 400;
      padding: 1.6rem 3.2rem;
      text-align: left;
    }

    tr {
      td {
        border: 0;
        background: var(--shape);
        padding: 1.6rem 3.2rem;
        color: var(--text-body);
        border-radius: 0.5rem;

        &:first-child {
          color: var(--text-title);
        }
      }

      &.withdraw {
        td.value {
          color: var(--red)
        }
      }

      &.deposit {
        td.value {
          color: var(--green)
        }
      }
    }
  }
`