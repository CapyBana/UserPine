import React, { useState } from 'react';
import { ResultBar, Img, Overview, Link } from './SearchResult.style';
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
        <ResultBar
        style={{
            backgroundColor: isHovered ? '#0e8b6c' : '#0a674f',
            transition: 'background-color 0.2s ease'
        }}>
            <Link  href='/movie' onMouseOver={mouseOver} onMouseLeave={mouseLeave}
            style={{ width:'90%' , textDecoration:'none'}}>
                <Img src={naruto} alt='Movie' />
                <Overview>
                    <div className='title'>Movie Title</div>
                    <div className='category'>Category</div>
                    <div className='year'>Year</div>
                </Overview>
            </Link>
            <StarBorderIcon onClick={func} style={{ marginLeft: '25px', color:'#cc7a00' }} 
            onMouseOver={mouseOver} onMouseLeave={mouseLeave} />
        </ResultBar>
    );
}

export default SearchResult;