import React, { useState } from 'react';
import { NavbarContainer, Logo, MenuItem, SearchContainer, SearchInput, HamburgerIcon, Menu } from './Navbar.style';


const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <NavbarContainer>
            <Logo to="/">MyLogo</Logo>
            <SearchContainer>
                <SearchInput type="text" placeholder="Search..." />
            </SearchContainer>
            <MenuItem to="/about">Categories</MenuItem>
            <HamburgerIcon onClick={toggleMenu}>
                <span></span>
                <span></span>
                <span></span>
            </HamburgerIcon>
            <Menu isOpen={isOpen}>
                <MenuItem to="/sign-up">Sign Up</MenuItem>
                <MenuItem to="/log-in">Log In</MenuItem>
            </Menu>
        </NavbarContainer>
    );
};

export default Navbar;
