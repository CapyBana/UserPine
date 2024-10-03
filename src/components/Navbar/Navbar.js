import React from 'react';
import { NavbarContainer, Logo, MenuItem, SearchBlock } from './Navbar.style';

const Navbar = () => {
    return (
        <NavbarContainer>
            <Logo>MyLogo</Logo>
            <div></div>
            <SearchBlock></SearchBlock>
            <MenuItem>Services</MenuItem>
            <MenuItem>Contact</MenuItem>
        </NavbarContainer>
    );
};

export default Navbar;
