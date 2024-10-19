import React, { useState } from 'react';
import { NavbarContainer, Logo, MenuItem, SearchBlock } from './Navbar.style';
import SearchResultList from '../SearchResultList/SearchResultList';

const Navbar = () => {
    const [showList, setShowList] = useState(false);

    return (
        <div style={{
            display:"flex",
            flexDirection:"column"
        }}>
            <NavbarContainer>
                <Logo>MyLogo</Logo>
                <div></div>
                <SearchBlock onClick={() => setShowList(true)}></SearchBlock>
                <MenuItem>Services</MenuItem>
                <MenuItem>Contact</MenuItem>
            </NavbarContainer>
            {showList && <SearchResultList/>}
        </div>
    );
};

export default Navbar;
