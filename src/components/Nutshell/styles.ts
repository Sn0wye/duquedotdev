import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;

  margin-top: 6.25rem;
  padding: 0 1rem;

  @media (max-width: 768px) {
    margin-top: 1.5rem;
  }
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
  width: 100%;
  margin-top: 1.25rem;

  p {
    font-size: 0.875rem;
  }

  @media (max-width: 768px) {
  }
`;

export const Articles = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  gap: 2.5rem;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 0;
  }
`;
