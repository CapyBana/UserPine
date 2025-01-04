import React, { useContext, useEffect, useState } from 'react';

import { NavbarContainer, Logo, MenuItem, SearchContainer, SearchInput, HamburgerIcon, Menu } from './Navbar.style';
import { SearchContext, SearchProvider } from '~/context/SearchProvider';
import { LoginContext } from '~/context/loginContext';
import './Navbar.css';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';

const Navbar = (props) => {
    const [isOpen, setIsOpen] = useState(false);
    const [CatOpen, setCat] = useState(false);

    const [Login, setLogin] = useState(true);
    const [accessToken, setAccessToken] = useState(null); // State for storing the token
  const { isLoggedIn, apiUrl, logout } = useContext(LoginContext);
  const [categories, setCategories] = useState([]);

    const { inputValue, setInputValue } = useContext(SearchContext);
    const [ tempInput, setTempInput ] = useState("");

    const navigate = useNavigate();

    const handleNavigateSearch = ( input) => {
        navigate(`search-result/${input}`)
    }

    const handleKeywordChange = (e) => {
        setInputValue(e.target.value);
    }

    

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
                <input 
                    class="SearchInput" 
                    value={tempInput} 
                    id="searchTxt" 
                    name = "searchTxt" 
                    type="text" 
                    placeholder="Search..." 
                    onChange={e => setTempInput(e.target.value)}
                    onKeyDown={(e) => { 
                        if (e.key === "Enter") {
                            setInputValue(e.target.value);
                            handleNavigateSearch(tempInput);
                        }
                    }}
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
