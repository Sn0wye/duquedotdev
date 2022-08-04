import styled from 'styled-components';

export const Container = styled.header`
    background-color: transparent;
    width: 100%;
    max-width: 1170px;
    display: flex;
    position: fixed;
    justify-content: space-between;
    align-items: center;
`;

export const Logo = styled.h1`
    font-weight: 500;
    font-size: 1.2rem;
    cursor: pointer;
`;

export const Navbar = styled.nav`
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
