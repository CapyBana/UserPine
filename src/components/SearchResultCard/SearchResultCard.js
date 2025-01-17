import React, { useContext, useState } from 'react';
import FavoriteBorderRoundedIcon from '@mui/icons-material/FavoriteBorderRounded';
import FavoriteRoundedIcon from '@mui/icons-material/FavoriteRounded';
import {
    Card,
    ImagePlaceholder,
    Content,
    Titles,
    Category,
    MovieRating,
    WishlistButton,
} from './SearchResultCard.style';
import { useNavigate } from 'react-router-dom';
import { MovieContext } from '~/context/movieContext';

function updateButtonText({ isHovered, isOpen }) {
    //const button = document.getElementById('dynamicButton');
}

const SearchResultCard = ({ id, img, title, category, rating, year, movie, onAddToWishlist, onRemoveFromWishlist }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [isHovered, setIsHovered] = useState(false);
    const navigate = useNavigate();
    const { setMovie } = useContext(MovieContext);

    const handleMouseEnter = () => setIsHovered(true);
    const handleMouseLeave = () => setIsHovered(false);

    const toggleButton = () => {
        setIsOpen(!isOpen);
        setIsHovered(false);
        isOpen ? onRemoveFromWishlist() : onAddToWishlist();
    };

    const toMoviePage = (id, movie) => {
        setMovie(movie);
        navigate(`../movie/${id}`);
    };

    updateButtonText(isHovered, isOpen);
    return (
        <Card>
            <ImagePlaceholder
                src={`data:image/jpeg;base64,${img}`}
                alt="Movie Picture"
                onClick={() => toMoviePage(id, movie)}
            />
            <Content onClick={() => toMoviePage(id, movie)}>
                <Titles>{title}</Titles>

                <Category>
                    {year} - {category.charAt(0).toUpperCase() + category.slice(1)}
                </Category>
                <MovieRating value={rating} readOnly={true} precision={0.5} />
            </Content>
            <WishlistButton
                direction="row"
                alignItems="center"
                gap={1}
                onClick={toggleButton}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
            >
                <Category>{isHovered ? (isOpen ? ' Remove from Wishlist' : ' Add to Wishlist') : ''}</Category>
                {isOpen ? (
                    <FavoriteRoundedIcon></FavoriteRoundedIcon>
                ) : (
                    <FavoriteBorderRoundedIcon></FavoriteBorderRoundedIcon>
                )}
            </WishlistButton>
        </Card>
    );
};

export default SearchResultCard;
