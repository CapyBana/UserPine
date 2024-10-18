import React, { useState } from 'react';
import { ResultBar, Img, Overview } from './SearchResult.style';
import naruto from 'src/assets/images/naruto.png'
import StarBorderIcon from '@mui/icons-material/StarBorder';

const SearchResult = () => {
    const [isHovered, setIsHovered] = useState(false);

    const mouseOver = () => {
        setIsHovered(true);
    }

    const mouseLeave = () => {
        setIsHovered(false);
    }
    
    function func() {
        alert("Added to wishlist");
    }

    return (
        <ResultBar id='1' href='/movie' onMouseOver={mouseOver} onMouseLeave={mouseLeave}
        style={{
            backgroundColor: isHovered ? '#10a27e' : '#0a674f',
            transition: 'background-color 0.2s ease'
        }}>
            <Img src={naruto} alt='Movie' />
            <Overview>
                <div className='title'>Movie Title</div>
                <div className='category'>Category</div>
                <div className='year'>Year</div>
            </Overview>
            <StarBorderIcon onClick={func} />
        </ResultBar>
    );
}

export default SearchResult;