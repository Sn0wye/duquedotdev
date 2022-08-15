import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 0.5rem;

  @media (max-width: 768px) {
    padding: 0 0.5rem;
  }
`;

export const Content = styled.div`
  display: flex;
  justify-content: space-between;
  height: 200px;
  width: 800px;
  gap: 0.5rem;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

export const StyledTextCard = styled.div`
  flex: 1;
  width: 100%;

  h3 {
    font-size: 2rem;
    color: #fca311;
  }

  p {
    font-size: 0.875rem;
  }
`;

export const AssetCard = styled.div`
  background-color: #c2c2c2;
  height: 100%;
  width: 15.625rem;
  flex: 1;
`;
