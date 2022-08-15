import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
`;

export const Content = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 0.5rem;
  height: 12.5rem;
  max-width: 50rem;
  width: 100%;
  gap: 0.5rem;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

export const Card = styled.div`
  background-color: #c2c2c2;
  height: 100%;
  width: 100%;
`;
