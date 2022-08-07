import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  max-width: 1170px;
  padding-top: 3rem;
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
