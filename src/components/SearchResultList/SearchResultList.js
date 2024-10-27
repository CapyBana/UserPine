import { React } from 'react';
import { List } from './SearchResultList.style';
import SearchResult from '../SearchResult/SearchResult';

const SearchResultList = () => {
    return (
        <List>
            <SearchResult />
        </List>
    );
}

export default SearchResultList;