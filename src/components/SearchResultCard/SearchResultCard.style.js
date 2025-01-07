import styled from 'styled-components';
import { Rating, Stack } from '@mui/material';

export const Card = styled.div`
    width: 80%;
    max-width: 1000px;
    display: flex;
    margin: auto;

    align-items: center;
    padding: 15px;
    background-color: #100C0C;
    border-radius: 14px;
    color: #fff;
    box-shadow: 10px 10px 40px rgba(0, 0, 0, 0.3);
    justify-content: center;

    &:hover {
        background-color:rgb(41, 41, 41);
        box-shadow: 10px 10px 40px rgba(28, 28, 28, 0.3);
        transition: background-color 0.2s ease;
        cursor: pointer;
    }
`;

export const ImagePlaceholder = styled.img`
    width: 80px;
    border-radius: 6px;
    margin: 10px 30px;
`;

export const Content = styled.div`
    flex: 1;
    
    overflow: hidden;
    text-overflow: ellipsis;
`;

export const Titles = styled.h3`
    font-size: var(--large-text_size);
    font-family: var(--boundedFont);
    font-weight: var(--normal-fontWeight);
    margin: 0;
    margin-bottom: 5px;

    width: 100%;
    height: 2em;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
`;

export const Category = styled.p`
    font-size: var(--normal-text_size);
    font-family: var(--boundedFont);
    font-weight: var(--normal-fontWeight);
    margin: 0;
    marginBottom: 5px;
    color: #ccc;
`;

export const MovieRating = styled(Rating)`
    width: 100px;
    gap: 8px;
    margin-top: 10px;
    justify-content: flex-start;
`;

export const WishlistButton = styled(Stack)`
    dislay:flex;

    
    color: #fff;
    border: none;
    padding: 8px 8px;
    border-radius: 25px;
    margin-right: 10px;
    margin-bottom: 80px;
    cursor: pointer;
    font-size: var(--normal-text_size);
    font-family: var(--boundedFont);


    &:hover {
        background-color: #e50914;
        transition: background-color 0.3s ease;
        display:flex;
    }
`;