import styled, { keyframes } from 'styled-components';

export const Container = styled.footer`
  display: flex;
  justify-content: center;
  margin-top: 3rem;
  padding: 1rem;

  @media (max-width: 768px) {
    margin-top: 2rem;
  }
`;

export const Content = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-width: 50rem;
`;

export const Socials = styled.div`
  display: flex;
  align-items: flex-start;
  flex-direction: column;
`;

export const SocialLink = styled.a`
  font-size: 2.2rem;
  font-weight: 800;
  text-decoration: none;
  transition: 0.2s;
  cursor: pointer;
  color: #14213d;

  &:hover {
    color: #fca311;
  }

  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
`;

const hoverEffect = keyframes`
  0% {
    opacity: 0;
    width: 0%;
  }

  50% {

  }
  100% {
    opacity: 1;
    width: 100%;
  }
`;

export const FindMe = styled.div`
  display: flex;
  flex-direction: column;

  h1 {
    font-size: 3.5rem;
    font-weight: 900;
    color: #fca311;
  }

  h3 {
    font-size: 2.2rem;
    font-weight: 900;
  }

  a {
    color: inherit;
    text-decoration: none;
    transition: all ease-in-out 0.3s;
    position: relative;

    &:hover {
      color: #fca311;

      &:after {
        content: '';
        height: 1px;
        background: #fca311;
        position: absolute;
        width: 100%;
        left: 0;
        bottom: 0;
        margin-top: 1rem;
        animation: ${hoverEffect} 0.3s ease-in-out;
      }
    }
  }
`;
