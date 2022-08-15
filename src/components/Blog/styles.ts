import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 5rem;
  padding: 0 1rem;

  h1 {
    color: #fca311;
    font-size: 3.25rem;
    width: 100%;
    max-width: 800px;
  }

  @media (max-width: 768px) {
    margin-top: 1.5rem;
  }
`;

export const Content = styled.section`
  width: 100%;
  max-width: 800px;
  display: flex;
  justify-content: space-between;

  @media (max-width: 768px) {
    flex-direction: column;
    justify-content: center;
    width: 100%;
  }
`;

export const Article = styled.article`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  max-width: 300px;

  h2 {
    font-weight: 700;
    font-size: 2rem;
    color: #14213d;

    transition: 0.2s;
    &:hover {
      color: #eb9710;
    }
  }

  p {
    padding-top: 1.25rem;
    font-size: 0.875rem;
  }

  @media (max-width: 768px) {
    max-width: 100%;
  }
`;
