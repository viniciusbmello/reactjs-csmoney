import styled from 'styled-components';

export const Container = styled.div`
  margin-top: 5.6rem;

  .tbody-header-mobile {
    display: none;
  }

  table {
    width: 100%;
    border-spacing: 0 0.5rem;

    th {
      color: ${props => props.theme.colors.textBody};
      font-weight: 400;
      padding: 1.6rem 3.2rem;
      text-align: left;
    }
  }

  @media (max-width: 720px) {
    margin-top: 3.2rem;

    .tbody-header-mobile {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding-bottom: 1.6rem;

      h2 {
        font-weight: 400;
        color: ${props => props.theme.colors.textTitle};
      }

      p {
        color: ${props => props.theme.colors.textBody};
      }
    }

    table {
      border-spacing: 0 1rem;

      thead {
        display: none;
      }
    }
  }
`;
