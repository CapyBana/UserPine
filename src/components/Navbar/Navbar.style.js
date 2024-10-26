import styled from 'styled-components';
import { TextField } from '@mui/material';

export const NavbarContainer = styled.nav`
    padding: 0 100px 0 100px;
    position: fixed;
    height: 60px;
    width: 100%;
    background-color: var(--primary-red);
    display: flex;
    align-items: center;
    justify-content: space-between;
    color: white;
    z-index: 1;
`;

export const SearchBlock = styled(TextField)`
    flex-basis: 50%;
    background-color: #d9d9d9;
    border-radius: 20px;
`;

export const Logo = styled.div`
    font-size: 1.5em;
    font-weight: bold;
`;

export const MenuItem = styled.div`
    font-size: 1.2em;
    cursor: pointer;
    transition: color 0.3s ease;

    &:hover {
        color: #ff6347;
    }
`;
