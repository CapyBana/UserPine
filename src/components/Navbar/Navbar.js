import React, { useState } from 'react';
import { NavbarContainer, Logo, MenuItem, SearchContainer, SearchInput, HamburgerIcon, Menu } from './Navbar.style';

const Navbar = (props) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <NavbarContainer>
            <Logo onClick={() => props.handlePage('/')} to="/">
                MyLogo
            </Logo>
            <SearchContainer>
                <SearchInput type="text" placeholder="Search..." />
            </SearchContainer>
            <HamburgerIcon onClick={toggleMenu}>
                <span></span>
                <span></span>
                <span></span>
            </HamburgerIcon>
            <Menu isOpen={isOpen}>
                <MenuItem onClick={() => props.handlePage('/')} to="/>
                    Home
                </MenuItem>
                <MenuItem to="/">
                <MenuItem onClick={() => props.handlePage('/')} to="/about">
                    <ul>
                        <li>
                            Categories
                            <ul class="dropdown">
                                <li>
                                    <a href="/">Action</a>
                                </li>
                                <li>
                                    <a href="/">Crime</a>
                                </li>
                                <li>
                                    <a href="/">Horror</a>
                                </li>
                                <li>
                                    <a href="/">Drama</a>
                                </li>
                                <li>
                                    <a href="/">Fantasy</a>
                                </li>
                                <li>
                                    <a href="/">Comedy</a>
                                </li>
                                <li>
                                    <a href="/">Mystery</a>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </MenuItem>
                <MenuItem onClick={() => props.handlePage('sign-up')}>Sign Up</MenuItem>
                <MenuItem onClick={() => props.handlePage('log-in')}>Log In</MenuItem>
            </Menu>
        </NavbarContainer>
    );
};

export default Navbar;
