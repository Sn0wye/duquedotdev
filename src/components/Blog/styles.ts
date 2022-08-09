import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 100px 0 0 0;

  h1 {
    color: #fca311;
    font-size: 3.25rem;
    width: 100%;
    max-width: 800px;
  }
`;

export const Content = styled.section`
  width: 100%;
  max-width: 800px;
  display: flex;
  justify-content: space-between;
`;

export const Article = styled.article`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
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
`;
