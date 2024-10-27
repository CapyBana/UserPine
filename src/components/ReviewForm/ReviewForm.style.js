import styled from 'styled-components';
import { Rating } from '@mui/material';

export const GeneralReview = styled.div`
    display: flex;
    flex-direction: column;
    position: relative;
    width: 100%;
    background-color: #000000;
    padding-bottom: 20px;
    z-index: -1;
    * {
        font-family: var(--boundedFont);
    }
    h1 {
        font-size: var(--primary-text_size);
    }
    h3 {
        font-size: var(--large-text_size);
    }
    p {
        font-size: var(--normal-text_size);
        font-weight: var(--small-fontWeight);
    }
`;

export const Return = styled.a`
    text-decoration: none;
    margin: 80px 0 70px 2.5%;
    display: flex;
    flex-direction: row;
    align-items: center;
    font-family: var(--boundedFont);
    color: #DCD1D1;
    .back {
        font-size: 28px;
        font-weight: 500;
    }
    &:hover {
        text-decoration: underlined;
    }
`;

export const HorizontalMovieCard = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    position: relative;
    left: 50%;
    transform: translateX(-50%);
    width: 85%;
    height: 250px;
    border-radius: 30px;
    background-color: #180d0d;
`;

export const MovieImg = styled.img`
    width: 140px;
    margin: 20px 50px;
    border-radius: 10px;
`;

export const Movie = styled.div`
    display: flex;
    flex-direction: column;
    margin-left: 30px;
    margin-right: 50px;
    color: #fae6e5;
    p {
        margin-bottom: 20px;
    }
`;

export const MovieTitle = styled.div`
    font-size: 40px;
    font-weight: 800;
    margin: 20px 0 15px;
`;

export const MovieRating = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
`;

export const StarRating = styled(Rating)`
    width: 100%;
    gap: 10px;
    justify-content: flex-start;
`;

export const Review = styled.div`
    display: flex;
    flex-direction: column;
    position: relative;
    left: 50%;
    transform: translateX(-50%);
    width: 85%;
    height: 960px;
    border-radius: 30px;
    background-color: #401313;
    margin: 50px 0;
    color: #fae6e5;
`;

export const StarReview = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    margin: 60px 60px 70px;
    height: 0px;
`;

// export const Question = styled.p`
//     font-weight: 400;
//     font-size: 24px;
// `;

export const StarPrompt = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 600px;
    h3 {
        padding-right: 16px;
    }
`;

export const StarReviewRating = styled(Rating)`
    width: 100%;
    gap: 5px;
`;

export const TextReview = styled.div`
    margin: 0px 60px;
`;

export const CommentArea = styled.textarea`
    width: 100%;
    background-color: #231b1b;
    border: 0px;
    padding: 20px;
    color: #fae6e5;
    margin-top: 20px;
    font-size: var(--medium-text_size);
    border-radius: 10px;
`;

export const PostContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    width: 100%;
    margin: 30px 0px;
`;

export const Post = styled.input`
    font-weight: var(--normal-fontWeight);
    font-size: var(--large-text_size);
    background-color: #1d269a;
    color: #fae6e5;
    border: 0px;
    padding: 15px 30px;
    border-radius: 40px;
`;
