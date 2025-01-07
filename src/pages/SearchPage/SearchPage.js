import React, { useContext, useEffect } from 'react';
import SearchResultCard from '~/components/SearchResultCard/SearchResultCard';
import './SearchPage.css';
import { SearchContext } from '~/context/SearchProvider';
import narutoImg from 'src/assets/images/naruto.png';
import onePieceImg from 'src/assets/images/one_piece.png';
import axios from 'axios';

export default function SearchPage() {
    const apiUrl = process.env.REACT_APP_API_URL;

    const results = [
        { id: 1, img: narutoImg, title: 'Inception', category: 'Movie', rating: '4.8', year: 2010 },
        { id: 2, img: onePieceImg, title: 'Breaking Bad', category: 'TV Show', rating: '3.5', year: 2008 },
        { id: 3, img: narutoImg, title: 'The Matrix', category: 'Movie', rating: '3.7', year: 1999 },
        { id: 4, img: narutoImg, title: 'The Godfather', category: 'Movie', rating: '4.2', year: 1972 },
        { id: 5, img: onePieceImg, title: 'Breaking Bad', category: 'TV Show', rating: '3.5', year: 2008 },
        { id: 6, img: narutoImg, title: 'The Godfather', category: 'Movie', rating: '4.2', year: 1972 },
    ];
    const { inputValue } = useContext(SearchContext);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`${apiUrl}/api/movies/search`, {
                    params: {
                        title: 'a',
                    },
                });
                console.log(response.data);
            } catch (err) {
            } finally {
            }
        };
        fetchData();
    }, []);

    const handleAddToWishlist = ({ id }) => {
        alert('Added to Wishlist!');
    };
    const handleRemoveFromWishlist = ({ id }) => {
        alert('Removed from Wishlist!');
    };

    return (
        <div className="search-result-page">
            <h3>Search Results for "{inputValue}"</h3>
            <div className="results-list">
                {results.map((result) => (
                    <SearchResultCard
                        key={result.id}
                        img={result.img}
                        title={result.title}
                        category={result.category}
                        rating={result.rating}
                        year={result.year}
                        onAddToWishlist={() => handleAddToWishlist(result.id)}
                        onRemoveFromWishlist={() => handleRemoveFromWishlist(result.id)}
                    />
                ))}
            </div>
        </div>
    );
}
