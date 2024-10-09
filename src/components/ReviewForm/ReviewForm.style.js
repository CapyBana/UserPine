import styled from 'styled-components';
import { Rating } from '@mui/material';

export const GeneralReview = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 1300px;
    margin: 50px 80px;
`;

export const HorizontalMovieCard = styled.div`
    display: flex;
    width: 1300px;
    height: 250px;
    border-radius: 30px;
    background-color: #180D0D;
`;

export const MovieImg = styled.img`
    padding: 25px 35px;
    display: flex;
    align-items: center;
`;

export const Movie = styled.div`
    display: flex;
    align-items: left;
    flex-direction: column;
    margin: 20px 50px;
    color: #FAE6E5;
`;

export const MovieTitle = styled.h2`
    font-family: 'Unbounded';
    margin-bottom: 10px;
`;

export const MovieDescription = styled.p`
    width: 90%;
    font-size: 16px;
    margin-bottom: 15px;
    text-align: justify;
`;

export const MovieRating = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center
`;

export const NumRating = styled.p`
    font-family: 'Unbounded';
    font-size: 30px;
    padding-right: 35px;
`

export const StarRating = styled(Rating)`
    width: 100%;
    gap: 10px;
    justify-content: flex-start;
`;

export const Review = styled.div`
    display: flex;
    width: 1300px;
    height: 1000px;
    border-radius: 30px;
    background-color: #791B16;
    margin: 70px 0px;
`;

export const StarReview = styled.div`
    margin: 30px;
`;