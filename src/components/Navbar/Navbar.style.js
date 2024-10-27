import styled from 'styled-components';
import { TextField } from '@mui/material';

export const NavbarContainer = styled.nav`
    padding: 0 200px 0 200px;
    position: fixed;
    height: 80px;
    width: 100%;
    background-color: var(--primary-red);
    display: flex;
    align-items: center;
    justify-content: space-between;
    color: white;
`;

export const SearchBlock = styled(TextField)`
    background-color: #f5f5f5;
    border-radius: 10px;
    margin: 10px 0;
    width: 500px;

    .MuiInputBase-input {
    height: 20px; // input height
    padding: 10px 14px; // adjust padding
  }

  .MuiOutlinedInput-root {
    height: 45px; // controls the overall TextField height
  }
`;
  

export const Logo = styled.div`
    font-size: 1em;
    font-weight: bold;
`;

export const MenuItem = styled.div`
    font-size: 1em;
    font-family: "Unbounded", sans-serif;
    cursor: pointer;
    transition: color 0.3s ease;

    &:hover {
        color: #ff6347;
    }
`;
