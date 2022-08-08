import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  max-width: 1170px;
  margin-top: 6.25rem;
`;

export const Content = styled.div`
  width: 100%;
  max-width: 800px;

  h1 {
    color: #fca311;
    font-weight: 700;
    font-size: 3rem;
  }

  h2 {
    font-size: 2rem;
    color: #fca311;
    transition: 0.2s;
    &:hover {
      color: #eb9710;
    }
  }
`;

export const Article = styled.article`
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  justify-content: space-between;
  max-width: 250px;

  p {
    margin-top: 1.25rem;
    font-size: 0.875rem;
  }
`;

export const Articles = styled.div`
  display: flex;
  justify-content: space-between;
`;
