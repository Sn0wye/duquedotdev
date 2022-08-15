import styled from 'styled-components';

export const Container = styled.header`
  background: transparent;

  width: 100%;
  max-width: calc(1170px + 2rem);

  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.25rem 2rem;
  margin: 0 auto;
  position: sticky;
  top: 0;

  @media (max-width: 1202px) {
    position: relative;
  }
`;

export const Logo = styled.h1`
  font-weight: 500;
  font-size: 1.2rem;
  cursor: pointer;
`;

export const StyledNavbar = styled.nav`
  ul {
    display: flex;
    align-items: center;
    text-decoration: none;
    list-style: none;
  }
`;

export const Anchor = styled.li`
  margin-left: 1.5rem;
  transition: color 0.2s;
  cursor: pointer;

  &:hover {
    color: #fca311;
  }
`;
