import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const NavbarContainer = styled.nav`
    width: 100%;
    height: 60px;
    background-color: var(--primary-red);
    color: white;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 6%;
    position: fixed;
    top: 0;
    z-index: 10;
`;

// Logo styling
export const Logo = styled(Link)`
    color: white;
    text-decoration: none;
    font-size: 16px;
    font-family: var(--boundedFont);
    font-weight: bold;
    &:hover {
        color: #fae6e5;
    }
`;

// Menu items container
export const Menu = styled.div`
    display: flex;
    justify-content: space-between;
    flex-basis: 30%;
    @media (max-width: 768px) {
        display: ${({ isOpen }) => (isOpen ? 'flex' : 'none')};
        flex-direction: column;
        position: absolute;
        top: 60px;
        right: 0;
        background-color: #791b16;
        width: 100%;
        padding: 20px;
    }
`;

export const MenuItem = styled(Link)`
    color: white;
    text-decoration: none;
    font-size: 20px;
    font-weight: 500;
    font-family: var(--boundedFont);
    &:hover {
        color: #fae6e5;
    }
`;

// Hamburger icon for mobile
export const HamburgerIcon = styled.div`
    display: none;
    cursor: pointer;

    @media (max-width: 768px) {
        display: block;
    }

    span {
        display: block;
        width: 25px;
        height: 3px;
        background-color: white;
        margin: 5px 0;
    }
`;

export const SearchContainer = styled.div`
    display: flex;
    align-items: center;
    flex: 1;
    margin-left: 2rem;
`;

export const SearchInput = styled.input`
    width: 100%;
    padding: 12px;
    border-radius: 4px;
    border: none;
    outline: none;
    font-size: 0.85rem;
    font-family: var(--boundedFont);
    transition: width 0.3s ease;
    @media (max-width: 767px) {
        width: 90%;
        max-width: 200px;
    }
    @media (min-width: 768px) {
        width: 90%;
        max-width: 300px;
    }
`;
