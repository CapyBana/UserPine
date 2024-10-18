import styled from 'styled-components';
import { NavigateNext } from '@mui/icons-material';

export const MovieListContainer = styled.div`
    padding-left: 20px;
    display: flex;
    flex-direction: column;
    gap: 16px;
    h3 {
        color: #fae6e5;
    }
    :last-child {
        display: flex;
        flex-direction: row;
    }
`;
export const MovieList = styled.div`
    display: flex;
    flex-direction: row;
    gap: 16px;
    max-width: 800px;
    overflow-x: hidden;
    white-space: nowrap;
`;

export const Navigator = styled(NavigateNext)`
    align-self: center;
    cursor: pointer;
`;
