import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  width: 100%;
  padding: 3rem 2rem 0;

  margin-bottom: 2rem;

  @media (max-width: 768px) {
    margin-bottom: 1.5rem;
  }
`;

export const Content = styled.div`
  max-width: 800px;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;

  h1 {
    align-self: flex-end;
    color: #14213d;
    font-weight: 600;
    font-size: 3.625rem;
    span {
      color: #fca311;
    }
  }
`;
