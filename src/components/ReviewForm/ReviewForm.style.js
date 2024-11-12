import styled from 'styled-components';
import { Rating } from '@mui/material';

export const GeneralReview = styled.div`
    display: flex;
    flex-direction: column;
    position: relative;
    width: 100%;
    margin-top: 50px;
    color: var(--primary-white);
    * {
        font-family: var(--boundedFont);
    }
    h1 {
        font-size: var(--primary-text_size);
    }
    p {
        font-weight: var(--small-fontWeight);
    }
`;

export const HorizontalMovieCard = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    position: relative;
    left: 50%;
    transform: translateX(-50%);
    width: 80%;
    border-radius: 30px;
    background-color: var(--horizontal-mv-card-background);
`;

export const MovieImg = styled.img`
    width: 140px;
    border-radius: 10px;
`;

export const Movie = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`;

export const MovieTitle = styled.div`
    font-weight: var(--large-fontWeight);
`;

export const MovieRating = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
`;

export const StarRating = styled(Rating)`
    width: 100%;
    gap: 10px;
`;

export const Review = styled.div`
    display: flex;
    flex-direction: column;
    position: relative;
    left: 50%;
    transform: translateX(-50%);
    width: 80%;
    border-radius: 30px;
    background-color: var(--prompt-container-background);
`;

export const StarReview = styled.div`
    display: flex;
    position: relative;
    left: 50%;
    transform: translateX(-50%);
    align-items: center;
`;

// export const Question = styled.p`
//     font-weight: 400;
//     font-size: 24px;
// `;

export const StarPrompt = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    h5 {
        padding-right: 20px;
    }
`;

export const StarReviewRating = styled(Rating)`
    display: flex;
    width: 100%;
    gap: 5px;
`;

export const TextReview = styled.div`
    display: flex;
    flex-direction: column;
    position: relative;
    left: 50%;
    transform: translateX(-50%);
`;

export const CommentArea = styled.textarea`
    width: 100%;
    background-color: var(--prompt-area-background);
    color: var(--primary-white);
    border: 0px;
    padding: 20px;
    margin-top: 20px;
    border-radius: 10px;
`;

export const PostContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    width: 100%;
`;

export const Post = styled.input`
    font-weight: var(--normal-fontWeight);
    background-color: var(--blue-effect);
    border: 0px;
    border-radius: 40px;
    color: var(--primary-white);
`;