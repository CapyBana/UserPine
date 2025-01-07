import React, { useState } from 'react';
import FavoriteBorderRoundedIcon from '@mui/icons-material/FavoriteBorderRounded';
import FavoriteRoundedIcon from '@mui/icons-material/FavoriteRounded';
import { Card, ImagePlaceholder, Content, Titles, Category, MovieRating, WishlistButton } from './SearchResultCard.style';
//import { YoutubeSearchedForSharp } from '@mui/icons-material';

function updateButtonText({ isHovered, isOpen}) {
    //const button = document.getElementById('dynamicButton');
}

const SearchResultCard = ({ img, title, category, rating, year, onAddToWishlist, onRemoveFromWishlist }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [isHovered, setIsHovered] = useState(false);
    //const [isSmall] = useState(false);

    const handleMouseEnter = () => setIsHovered(true);
    const handleMouseLeave = () => setIsHovered(false);

    const toggleButton = () => {
        setIsOpen(!isOpen);
        setIsHovered(false);
        isOpen ? onRemoveFromWishlist() : onAddToWishlist();
    };
    
    updateButtonText(isHovered ,isOpen)
    return (
        <Card>
            <ImagePlaceholder src={img} alt="Movie Picture" />
            <Content>
                <Titles>{title}</Titles>
                <Category>{year} - {category}</Category>
                <MovieRating value={rating} readOnly={true} precision={0.5}/>
            </Content>
            <WishlistButton direction="row" alignItems="center" gap={1}
            onClick={ toggleButton }
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            >
                <Category>{isHovered ? isOpen ? " Remove from Wishlist" : " Add to Wishlist"  : ""}</Category>
                {isOpen
                ? <FavoriteRoundedIcon></FavoriteRoundedIcon>
                : <FavoriteBorderRoundedIcon></FavoriteBorderRoundedIcon>}
            </WishlistButton>
        </Card>
    );
}

export default SearchResultCard;