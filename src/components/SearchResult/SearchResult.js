import React, { useState } from 'react';
import { ResultBar, Img, Overview, Link } from './SearchResult.style';
import naruto from 'src/assets/images/naruto.png'
import StarBorderIcon from '@mui/icons-material/StarBorder';

const SearchResult = () => {
    const [isHovered, setIsHovered] = useState(false);
    const [wishlistHovered, setWishlistHovered] = useState(false);

    function func() {
        alert("Added to wishlist");
    }

    return (
        <ResultBar style={{
            backgroundColor: isHovered ? '#0e8b6c' : '#0a674f',
            transition: 'background-color 0.2s ease'
        }}>
            <Link
                href='/movie' onMouseOver={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
            >
                <Img src={naruto} alt='Movie' />
                <Overview>
                    <div className='title'>Movie Title</div>
                    <div className='category'>Category</div>
                    <div className='year'>Year</div>
                </Overview>
            </Link>
            <StarBorderIcon
                onClick={func} style={{
                    marginLeft: '25px',
                    color: wishlistHovered ? '#cc7a00' : '#995c00',
                    transition: 'color 0.5s ease'
                }} 
                onMouseOver={() => { setIsHovered(true); setWishlistHovered(true); }}
                onMouseLeave={() => { setIsHovered(false); setWishlistHovered(false); }}
            />
        </ResultBar>
    );
}

export default SearchResult;