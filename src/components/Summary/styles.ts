import styled from 'styled-components';

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 3.2rem;
  margin-top: -10rem;

  @media (max-width: 720px) {
    gap: 1.6rem;
    display: flex;
    overflow-x: auto;
    overflow-y: hidden;
    margin-left: -3.2rem;
    margin-right: -3.2rem;

    &::-webkit-scrollbar {
      display: none;
    }

    -ms-overflow-style: none;
    scrollbar-width: none;
  }
`;
