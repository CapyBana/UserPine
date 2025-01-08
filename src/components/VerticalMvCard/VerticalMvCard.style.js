import styled from 'styled-components';
import { Card, Rating } from '@mui/material';

export const MovieCard = styled(Card)`
    min-width: 176px;
    height: 350px;
    display: flex;
    flex-direction: column;
    gap: 6px;
    && {
        background-color: inherit;
    }
`;

export const Image = styled.img`
    width: fit-content;
    height: 100%;
    border-radius: 10px;
    max-height: 260px;
`;

export const MvRating = styled(Rating)`
    width: 100%;
    gap: 6px;
    justify-content: flex-start;
`;

export const MvDetail = styled.div`
    display: flex;
    flex-direction: row;
    gap: 8px;
    align-items: center;
    justify-content: flex-start;
    h1 {
        font-size: 20px;
        margin: 0;
        color: #fff;
    }
`;
