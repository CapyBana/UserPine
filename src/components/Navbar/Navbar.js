import React from 'react';
import { NavbarContainer, Logo, MenuItem, SearchBlock } from './Navbar.style';

const Navbar = () => {
    return (
        <NavbarContainer>
            <Logo>MyLogo</Logo>
            <div></div>
            <div> <SearchBlock/> </div>
            <MenuItem>Categories</MenuItem>
            <MenuItem>Sign In</MenuItem>
        </NavbarContainer>
    );
};

export default Navbar;
