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
            <MenuItem to="/about">Categories</MenuItem>
            <HamburgerIcon onClick={toggleMenu}>
                <span></span>
                <span></span>
                <span></span>
            </HamburgerIcon>
            <Menu isOpen={isOpen}>
<<<<<<< HEAD
                <MenuItem to="/sign-up">Sign Up</MenuItem>
                <MenuItem to="/log-in">Log In</MenuItem>
=======
                <MenuItem onClick={() => props.handlePage('/')} to="/">
                    Home
                </MenuItem>
                <MenuItem to="/about">
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
>>>>>>> d6c7a661bb1c4a0239d0f6b39dfac8ab3d73edfc
            </Menu>
        </NavbarContainer>
    );
};

export default Navbar;
