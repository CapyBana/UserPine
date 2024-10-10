import styled from 'styled-components';
import { Rating } from '@mui/material';

export const GeneralReview = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 1300px;
    margin: 50px 80px;
    font-family: "Unbounded";
`;

export const HorizontalMovieCard = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    width: 1300px;
    height: 250px;
    border-radius: 30px;
    background-color: #180D0D;
`;

export const MovieImg = styled.img`
    padding-left: 60px;
    display: block;
    width: 26%;
`;

export const Movie = styled.div`
    display: flex;
    flex-direction: column;
    margin: 0px 65px;
    color: #FAE6E5;
`;

export const MovieTitle = styled.h2`
    margin-bottom: 15px;
    font-weight: 900;
    font-size: 40px;
`;

export const MovieDescription = styled.p`
    font-size: 13px;
    margin-bottom: 20px;
    text-align: justify;
    font-weight: 200;
`;

export const MovieRating = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center
`;

export const NumRating = styled.p`
    font-size: 25px;
    padding-right: 35px;
`

export const StarRating = styled(Rating)`
    width: 100%;
    gap: 10px;
    justify-content: flex-start;
`;

export const Review = styled.div`
    display: flex;
    flex-direction: column;
    width: 1300px;
    height: 960px;
    border-radius: 30px;
    background-color: #401313;
    margin: 70px 0px;
    color: #FAE6E5;
`;

export const StarReview = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    margin: 60px 60px 70px;
    height: 0px;
`;

export const Question = styled.p`
    font-weight: 400;
    font-size: 24px;
`;

export const StarPrompt = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 600px;
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
    background-color: #231B1B;
    border: 0px;
    padding: 20px;
    color: #FAE6E5;
    margin-top: 20px;
    font-size: 20px;
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
    font-family: "Unbounded";
    font-weight: 600;
    font-size: 30px;
    background-color: #1D269A;
    color: #FAE6E5;
    border: 0px;
    padding: 15px 30px;
    border-radius: 40px;
`;

export const CommentSection = () => {
    return (
        <form target='_self' method='post'>
            <CommentArea rows='25' placeholder='Whatcha thinking about?' required/>
            <PostContainer><Post type='submit' value='Post' /></PostContainer>
        </form>
    );
};