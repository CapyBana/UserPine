import styled from 'styled-components';

export const CommentBlock = styled.div`
    margin-top: 65px;
    width: 90%;
    display: flex;
    flex-direction: column;
    background-color: black;
    padding: 20px;
    border-radius: 20px;
    color: var(--primary-white);
    h3 {
        padding: 0 0 20px 0;
    }
`;
export const UserComment = styled.div`
    width: 100%;
    background-color: #181818;
    padding: 10px;
    .head {
        display: flex;
        flex-direction: row;
        align-items: center;
    }
    .title {
        padding-left: 20px;
    }
    p {
        font-size: var(--normal-text_size);
        height: 150px;
        width: auto;
        overflow-y: hidden;
    }
    text {
        font-size: var(--medium-text_size);
    }
`