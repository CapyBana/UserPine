import { Card } from "@mui/material";
import styled from "styled-components";

export const VerticalMovieCard = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    position: relative;
    left: 50%;
    transform: translateX(-50%);
    width: 85%;
    height: 250px;
    border-radius: 30px;
    background-color: #180d0d;
`;

export const InfoLayout = styled.div`
    width: 85%;
    height: 960px;
    transform: translateX(8.8%);
    margin-top: 50px;
`;

export const InfoBlock = styled.div`
    flexDirection: column;
    width: 65%;
    height: 100%;
    display: block;
    float: left;
    .block {
        padding: 20px 20px 10px 20px;
        margin: 0 0 20px 0;
        border-radius: 20px;
        background-color: #0a674f;
        text-align: center;
    }
    .descriptionBlock {
        padding: 40px;
        border-radius: 30px;
        background-color: #0a674f;
    }
    @media (max-width: 768px) {
        width: 100%;
        height: auto;
        .descriptionBlock {
            margin-bottom: 20px;
        }
    }
`;

export const MovieInfoCard = styled.div`
    display: flex;
    flex-direction: row;
    position: relative;
    left: 50%;
    transform: translateX(-50%);
    width: 85%;
    height: 250px;
    padding: 25px;
    border-radius: 30px;
    background-color: #180d0d;
`;

export const PPAL = styled.div`
    display: flex;
    flex-direction: column;
    position: relative;
    float: right;
    width: 32%;
    border-radius: 30px;
    background-color: #0a674f;
    color: #fae6e5;
    padding: 40px 40px 40px;
    @media (max-width: 768px) {
        width: 100%;

    }
`;

export const MoviePageLayout = styled.div`
    display: flex;
    flex-direction: column;
    position: relative;
    width: 100%;
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

export const MovieList = styled.div`
    display: inline-block;
    flex-direction: column;
    gap: 16px;
    max-height: 830px;
    overflow: hidden;
    overflow-y: scroll;
`;

export const MovieCard = styled(Card)`
    flex-direction: row;
    margin: 20px 0;
    padding: 12px 5px 0 12px;
    && {
        border-radius: 15px;
        background-color: #1b493d;
    }
`;