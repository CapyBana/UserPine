import React, { useContext, useEffect, useState } from 'react';

import { NavbarContainer, Logo, MenuItem, SearchContainer, HamburgerIcon, Menu } from './Navbar.style';
import { SearchContext } from '~/context/SearchProvider';
import { LoginContext } from '~/context/loginContext';
import './Navbar.css';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import { MovieContext } from '~/context/movieContext';

const Navbar = (props) => {
    const { isLoggedIn, apiUrl, logout } = useContext(LoginContext);
    const { setCategory } = useContext(MovieContext);
    const [isOpen, setIsOpen] = useState(false);
    const [categories, setCategories] = useState([]);
    const { setInputValue } = useContext(SearchContext);
    const [tempInput, setTempInput] = useState('');
    const navigate = useNavigate();

    const handleSearch = (e) => {
        if (e.key === 'Enter') {
            setInputValue(e.target.value);
            setTempInput('');
            navigate(`search-result/${tempInput}`);
        }
    };

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

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
                <input
                    className="SearchInput"
                    value={tempInput}
                    id="searchTxt"
                    name="searchTxt"
                    type="text"
                    placeholder="Search..."
                    onChange={(e) => setTempInput(e.target.value)}
                    onKeyDown={(e) => handleSearch(e)}
                />
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
                                {categories.length > 0 &&
                                    categories.map((category) => (
                                        <li key={category.id}>
                                            <Link
                                                to={`/category/${category.categoryName}`}
                                                onClick={() => setCategory(category.categoryName)}
                                            >
                                                {category.categoryName.charAt(0).toUpperCase() +
                                                    category.categoryName.slice(1)}
                                            </Link>
                                        </li>
                                    ))}
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
                                        <Link to="/user-profile">My movie</Link>
                                    </li>
                                    <li>
                                        <a>Settings</a>
                                    </li>
                                    <li>
                                        <a onClick={logout}>Log out</a>
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
