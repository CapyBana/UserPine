import React, { useState } from 'react';
import { NavbarContainer, Logo, MenuItem, SearchContainer, SearchInput, HamburgerIcon, Menu } from './Navbar.style';
import { BrowserRouter as Router } from 'react-router-dom';
//import SearchResultList from '../SearchResultList/SearchResultList';
import { Money } from '@mui/icons-material';

const Navbar = (props) => {
    const [isOpen, setIsOpen] = useState(false);
    //const [isMobile, setIsMobile] = useState(false); // Track mobile view

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <NavbarContainer>
            <Logo to="/">MyLogo</Logo>
            <SearchContainer>
                <SearchInput type="text" placeholder="Search..." />
            </SearchContainer>
            <HamburgerIcon onClick={toggleMenu}>
                <span></span>
                <span></span>
                <span></span>
            </HamburgerIcon>
            <Menu isOpen={isOpen}>
                <MenuItem onClick={() => props.handlePage('/')} to="/">
                    Home
                </MenuItem>
                <MenuItem onClick={() => props.handlePage('/')} to="/about">
                    <ul>
                        <li>Categories
                            <ul class="dropdown">
                                <li><a>Action</a></li>
                                <li><a>Crime</a></li>
                                <li><a>Horror</a></li>
                                <li><a>Drama</a></li>
                                <li><a>Fantasy</a></li>
                                <li><a>Comedy</a></li>
                                <li><a>Mystery</a></li>
                            </ul>
                        </li>
                    </ul>
                </MenuItem>
                <MenuItem onClick={() => props.handlePage('sign-up')}>Sign Up</MenuItem>
                <MenuItem to="/log-in">Log In</MenuItem>
            </Menu>
        </NavbarContainer>
    );
};

export default Navbar;
