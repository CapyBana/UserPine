import styled from 'styled-components';

export const ResultBar = styled.div`
    display: flex;
    align-items: center;
    flex-direction: row;
    background-color: rgba(10, 103, 79, 0.8);
    height: 90px;
    text-decoration: none;
    width: 100%;
    font-family: var(--boundedFont);
    color: #FAE6E5;
    .title {
        font-size: 26px;
        font-weight: 700;
        margin-top: -6px;
    }
    .category {
        font-size: 14px;
        font-weight: 400;
    }
    .year {
        font-size: 12px;
        font-style: italic;
    }
`;

export const Img = styled.img`
    width: 50px;
    margin: 0px 20px;
`;

export const Overview = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 79%;
`;