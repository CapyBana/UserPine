import React, { useContext, useEffect, useState } from 'react';
import { NavbarContainer, Logo, MenuItem, SearchContainer, SearchInput, HamburgerIcon, Menu } from './Navbar.style';
import { SearchContext, SearchProvider } from '~/context/SearchProvider';
import './Navbar.css';
import { Link, useNavigate } from 'react-router-dom';

const Navbar = (props) => {
    const [isOpen, setIsOpen] = useState(false);
    const [CatOpen, setCat] = useState(false);

    const [Login, setLogin] = useState(true);
    const [accessToken, setAccessToken] = useState(null); // State for storing the token

    const { inputValue, setInputValue } = useContext(SearchContext);
    const [ tempInput, setTempInput ] = useState("");

    const navigateSearch = useNavigate();

    const handleNavigateSearch = ( input) => {
        navigateSearch(`search-result/${input}`)
    }

    const handleKeywordChange = (e) => {
        setInputValue(e.target.value);
    }
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
