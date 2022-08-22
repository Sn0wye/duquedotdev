import styled, { keyframes } from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  padding: 0 0.5rem;
  margin-top: 0.5rem;
`;

export const Content = styled.section`
  display: flex;
  justify-content: space-between;
  max-width: 50rem;
  width: 100%;
  gap: 0.5rem;

  @media (max-width: 768px) {
    width: 100%;
    flex-direction: column;
  }
`;
export const StyledAssetArea = styled.div`
  background-color: #c2c2c2;
  flex: 1;
  width: 100%;
  min-height: 25rem;
`;

export const CardContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #14213d;

  flex: 1;

  padding: 3rem 0;
`;

export const CardTitle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  h3 {
    color: #fca311;
    font-weight: 700;
    font-size: 2.5rem;
    transition: 0.2s;

    &:hover {
      opacity: 0.7;
    }
  }
`;

const slideDown = keyframes`
    0% {
        opacity: 0;
        transform: translateY(-5px);
    }

    50% {
      transform: translateY(2px);
    }

    100% {
        opacity: 1;
        transform: translateY(0);
    }
`;

export const CardLink = styled.a`
  all: unset;
  color: #ecf0f3;
  font-size: 1.5rem;
  transition: 0.2s;
  cursor: pointer;
  position: relative;

  margin-top: 2rem;

  &:hover {
    /* border-bottom: 2px solid #ecf0f3; */
    /* padding-bottom: 5px; */
    &::after {
      content: '';
      display: block;
      height: 2px;
      position: absolute;
      bottom: -5px;
      left: 0;
      width: 100%;
      background-color: #ecf0f3;
      animation: ${slideDown} 0.2s ease-in-out;
    }
  }
`;

export const ImageContainer = styled.div`
  position: relative;
  height: 100%;
  width: 100%;
`;
