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
    width: 100%;
    border-radius: 10px;
`;

export const MvRating = styled(Rating)`
    width: 100%;
    gap: 6px;
    justify-content: flex-start;
`;

export const MvDetail = styled.div`
    display: flex;
    flex-direction: row;
    padding-left: 4px;
    gap: 8px;
    justify-content: flex-start;
    h1 {
        font-size: 32px;
        margin-top: 0px;
        margin-left: 0px;
    }
    h2 {
        padding-top: 20px;
        font-size: 12px;
    }
`;
