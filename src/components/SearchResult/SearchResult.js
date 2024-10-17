import { React } from 'react';
import naruto from 'src/assets/images/naruto.png';

const SearchResult = () => {
    /*const result = {
        name: "Movie Name",
        category: "Category",
        year: "year"
    };*/

    return (
        <SearchResult>
            <img src={naruto} alt='Movie' style={{ margin: '10px 20px' }} />

        </SearchResult>
    );
}

export default SearchResult;