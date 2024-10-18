import React, { useState } from 'react';
import { NavbarContainer, Logo, MenuItem, SearchBlock } from './Navbar.style';
import SearchResultList from '../SearchResultList/SearchResultList';

const Navbar = () => {
    const [showComponent, setShowComponent] = useState(false);
    const handleToggle = () => {
        setShowComponent(true);
    };

    return (
        <div style={{
            display:"flex",
            flexDirection:"column"
        }}>
            <NavbarContainer>
                <Logo>MyLogo</Logo>
                <div></div>
                <SearchBlock onClick={handleToggle}></SearchBlock>
                <MenuItem>Services</MenuItem>
                <MenuItem>Contact</MenuItem>
            </NavbarContainer>
            {showComponent && <SearchResultList />}
        </div>
    );
};

export default Navbar;
