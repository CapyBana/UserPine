import React from 'react';
import { NavbarContainer, Logo, MenuItem, SearchBlock, Search } from './Navbar.style';
import SearchResultList from '../SearchResultList/SearchResultList';

const Navbar = () => {
    return (
        <NavbarContainer>
            <Logo>MyLogo</Logo>
            <div></div>
            <Search>
                <SearchBlock></SearchBlock>
                <SearchResultList />
            </Search>
            <MenuItem>Services</MenuItem>
            <MenuItem>Contact</MenuItem>
        </NavbarContainer>
    );
};

export default Navbar;
