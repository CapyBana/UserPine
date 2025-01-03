import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { NavbarContainer, Logo, MenuItem, SearchContainer, SearchInput, HamburgerIcon, Menu } from './Navbar.style';
import { LoginContext } from '~/context/loginContext';
import axios from 'axios';

const Navbar = (props) => {
    const [isOpen, setIsOpen] = useState(false);
    //const [isMobile, setIsMobile] = useState(false); // Track mobile view
    const { isLoggedIn, apiUrl } = useContext(LoginContext);
    //const [accessToken, setAccessToken] = useState(null); // State for storing the token
    const [categories, setCategories] = useState([]);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };
    // useEffect(() => {
    //     const token = localStorage.getItem('accessToken');
    //     setAccessToken(token);
    // }, []);

    useEffect(() => {
        const fetchCategory = async () => {
            try {
                const response = await axios.get(`${apiUrl}/api/movies/category`);
                setCategories(response.data.data);
            } catch (error) {
                console.error('Error fetching categories:', error);
            }
        };
        fetchCategory();
    }, [apiUrl]);

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
            <Menu $isOpen={isOpen}>
                <MenuItem onClick={() => props.handlePage('/')} to="/">
                    Home
                </MenuItem>
                <MenuItem onClick={() => props.handlePage('/')}>
                    <ul>
                        <li>
                            Categories
                            <ul className="dropdown">
                                {categories.length > 0 && (
                                    categories.map((category) => (
                                        <li key={category.id}>
                                            <Link to={`/category/${category.categoryName}`}>{category.categoryName}</Link>
                                        </li>
                                    ))
                                )}
                            </ul>
                        </li>
                    </ul>
                </MenuItem>
                {isLoggedIn ? (
                    <MenuItem>
                        <ul>
                            <li>
                                My Account
                                <ul className="dropdown">
                                    <li>
                                        <a>My movie</a>
                                    </li>
                                    <li>
                                        <a>Settings</a>
                                    </li>
                                    <li>
                                        <a>Log out</a>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </MenuItem>
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
