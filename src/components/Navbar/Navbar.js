import React, { useEffect, useState } from 'react';
import { NavbarContainer, Logo, MenuItem, SearchContainer, SearchInput, HamburgerIcon, Menu } from './Navbar.style';

const Navbar = (props) => {
    const [isOpen, setIsOpen] = useState(false);
    const [CatOpen, setCat] = useState(false);
    //const [isMobile, setIsMobile] = useState(false); // Track mobile view
    const [Login, setLogin] = useState(true);
    const [accessToken, setAccessToken] = useState(null); // State for storing the token

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };
    const toggleCat = () => {
        setIsOpen(!isOpen);
    };
    useEffect(() => {
        const token = localStorage.getItem('accessToken');
        setAccessToken(token);
    }, []);
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
                <MenuItem onClick={() => props.handlePage('/')} to="/">
                    Home
                </MenuItem>
                <MenuItem onClick={() => props.handlePage('/')} to="/about">
                    <ul>
                        <li>
                            Categories
                            <ul class="dropdown" CatOpen={CatOpen}>
                                <li>
                                    <a>Action</a>
                                </li>
                                <li>
                                    <a>Crime</a>
                                </li>
                                <li>
                                    <a>Horror</a>
                                </li>
                                <li>
                                    <a>Drama</a>
                                </li>
                                <li>
                                    <a>Fantasy</a>
                                </li>
                                <li>
                                    <a>Comedy</a>
                                </li>
                                <li>
                                    <a>Mystery</a>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </MenuItem>
                {Login ? (
                    <MenuItem>My Account</MenuItem>
                ) : (
                    <>
                        <MenuItem onClick={() => props.handlePage('sign-up')}>Sign Up</MenuItem>
                        <MenuItem onClick={() => props.handlePage('log-in')}>Log In</MenuItem>
                    </>
                )}
            </Menu>
        </NavbarContainer>
    );
};

export default Navbar;
