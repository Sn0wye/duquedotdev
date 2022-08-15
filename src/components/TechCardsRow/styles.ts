import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Content = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 1.25rem;
  height: 200px;
  width: 800px;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

export const StyledTextCard = styled.div`
  h3 {
    font-size: 2rem;
    color: #fca311;
  }

  p {
    font-size: 0.875rem;
  }
  /* height: 12.5rem;
  width: 15.625rem; */
  aspect-ratio: 1/1;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

export const AssetCard = styled.div`
  background-color: #c2c2c2;
  height: 12.5rem;
  width: 15.625rem;
`;
