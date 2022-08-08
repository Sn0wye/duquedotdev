import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 1170px;
`;

export const Content = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 20px 0 0 0;
  height: 200px;
  width: 800px;
`;

export const StyledTextCard = styled.div`
  h3 {
    font-size: 2rem;
    color: #fca311;
  }

  p {
    font-size: 0.875rem;
  }
  height: 12.5rem;
  width: 15.625rem;
`;

export const AssetCard = styled.div`
  background-color: #c2c2c2;
  height: 12.5rem;
  width: 15.625rem;
`;
