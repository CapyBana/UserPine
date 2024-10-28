import styled from "styled-components";

export const MyMovieRatingBlock = styled.div`
    width: 80%;
    position: relative;
    margin-top: 50px;
    left: 50%;
    transform: translateX(-50%);
    background-color: #401313;
    border-radius: 30px;
    display: flex;
    flex-direction: column;
`;

export const MyMovieRatingTitler = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    width: 90%;
    position: relative;
    left: 50%;
    transform: translateX(-50%);
    margin: 10px 0;
    font-size: 20px;
    font-weight: 400;
`;

export const Titler = styled.div`
    background-color: #095d48;
    width: 8px;
    height: 40px;
    border-radius: 50px;
    margin-right: 20px;
`;

export const MovieListScroll = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    width: 92%;
    position: relative;
    left: 50%;
    transform: translateX(-50%);
    margin-bottom: 20px;
`;

export const MovieList = styled.div`
    display: inline-flex;
    align-items: center;
    overflow-x: auto; 
    scroll-behavior: smooth;
`;