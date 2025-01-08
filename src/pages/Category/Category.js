import React, { useContext, useEffect, useState } from 'react';
import SearchResultCard from '~/components/SearchResultCard/SearchResultCard';
import './Category.css';
// import narutoImg from 'src/assets/images/naruto.png';
// import onePieceImg from 'src/assets/images/one_piece.png';
import axios from 'axios';
import { LoginContext } from '~/context/loginContext';
import { MovieContext } from '~/context/movieContext';

export default function CategoryPage() {
    // const results = [
    //     { id: 1, img: narutoImg, title: 'Inception', category: 'Movie', rating: '4.8', year: 2010 },
    //     { id: 2, img: onePieceImg, title: 'Breaking Bad', category: 'TV Show', rating: '3.5', year: 2008 },
    //     { id: 3, img: narutoImg, title: 'The Matrix', category: 'Movie', rating: '3.7', year: 1999 },
    //     { id: 4, img: narutoImg, title: 'The Godfather', category: 'Movie', rating: '4.2', year: 1972 },
    //     { id: 5, img: onePieceImg, title: 'Breaking Bad', category: 'TV Show', rating: '3.5', year: 2008 },
    //     { id: 6, img: narutoImg, title: 'The Godfather', category: 'Movie', rating: '4.2', year: 1972 },
    // ];
    const { apiUrl } = useContext(LoginContext);
    const { category, handleAddToWishlist } = useContext(MovieContext);
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`${apiUrl}/api/movies/category/${category}`);
                setData(response.data.data);
                console.log(response.data.data);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };
        fetchData();
    }, [apiUrl, category]);

    if (loading) {
        return <p>Loading...</p>;
    }

    if (error) {
        return <p>Error: {error}</p>;
    }

    const handleRemoveFromWishlist = ({ id }) => {
        alert('Removed from Wishlist!');
    };

    return (
        <div className="search-result-page">
            <div className="results-list">
                {data.map((result) => (
                    <SearchResultCard
                        id={result.id}
                        img={result.movieImg}
                        title={result.title}
                        category={result.category.categoryName}
                        rating={4}
                        year={result.releaseDate}
                        onAddToWishlist={() => handleAddToWishlist(result.id)}
                        onRemoveFromWishlist={() => handleRemoveFromWishlist(result.id)}
                    />
                ))}
            </div>
        </div>
    );
}
import React, { useContext, useEffect, useState } from 'react';
import SearchResultCard from '~/components/SearchResultCard/SearchResultCard';
import './Category.css';
// import narutoImg from 'src/assets/images/naruto.png';
// import onePieceImg from 'src/assets/images/one_piece.png';
import axios from 'axios';
import { LoginContext } from '~/context/loginContext';
import { MovieContext } from '~/context/movieContext';

export default function CategoryPage() {
    // const results = [
    //     { id: 1, img: narutoImg, title: 'Inception', category: 'Movie', rating: '4.8', year: 2010 },
    //     { id: 2, img: onePieceImg, title: 'Breaking Bad', category: 'TV Show', rating: '3.5', year: 2008 },
    //     { id: 3, img: narutoImg, title: 'The Matrix', category: 'Movie', rating: '3.7', year: 1999 },
    //     { id: 4, img: narutoImg, title: 'The Godfather', category: 'Movie', rating: '4.2', year: 1972 },
    //     { id: 5, img: onePieceImg, title: 'Breaking Bad', category: 'TV Show', rating: '3.5', year: 2008 },
    //     { id: 6, img: narutoImg, title: 'The Godfather', category: 'Movie', rating: '4.2', year: 1972 },
    // ];
    const { apiUrl } = useContext(LoginContext);
    const { category, handleAddToWishlist } = useContext(MovieContext);
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`${apiUrl}/api/movies/category/${category}`);
                setData(response.data.data);
                console.log(response.data.data);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };
        fetchData();
    }, [apiUrl, category]);

    if (loading) {
        return <p>Loading...</p>;
    }

    if (error) {
        return <p>Error: {error}</p>;
    }

    const handleRemoveFromWishlist = ({ id }) => {
        alert('Removed from Wishlist!');
    };

    return (
        <div className="search-result-page">
            <div className="results-list">
                {data.map((result) => (
                    <SearchResultCard
                        id={result.id}
                        img={result.movieImg}
                        title={result.title}
                        category={result.category.categoryName}
                        rating={result.rating}
                        year={result.releaseDate}
                        onAddToWishlist={() => handleAddToWishlist(result.id)}
                        onRemoveFromWishlist={() => handleRemoveFromWishlist(result.id)}
                    />
                ))}
            </div>
        </div>
    );
}
