import { React } from 'react';
import { List } from './SearchResultList.style';
import SearchResult from '../SearchResult/SearchResult';

const SearchResultList = () => {
    const results = [
        { result: '', id: 1 },
        { result: '', id: 2 },
    ];

    return (
        <List>
            {results.map((result, id) => {
                return <SearchResult result={result} key={id} />;
            })}
        </List>
    );
}

export default SearchResultList;