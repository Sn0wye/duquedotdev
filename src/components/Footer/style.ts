import styled from 'styled-components';

export const Container = styled.footer`
  display: flex;
  justify-content: center;
  margin-top: 5rem;
  padding: 1rem;
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

export const FindMe = styled.div`
  h1 {
    font-size: 3.5rem;
    font-weight: 900;
    color: #fca311;
  }

  h3 {
    font-size: 2.2rem;
    font-weight: 900;
  }
`;
