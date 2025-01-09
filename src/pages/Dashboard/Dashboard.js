import React, { useContext, useEffect, useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import TranslateMvCard from '~/components/MvCardEffect/TranslateMvCard';
import VerticalMvList from '~/components/VerticalMvList/VerticalMvList';
import { LoginContext } from '~/context/loginContext';
import { MvRating } from '~/components/VerticalMvCard/VerticalMvCard.style';
import { MovieImg, MovieTitle } from '~/components/ReviewForm/ReviewForm.style';
import { TopMovies } from '~/components/trendingMoviePage/trendingMovie.style';
import TrendingMovie from '~/components/trendingMoviePage/trendingMovie';

export const DashboardLayout = styled.div`
    width: 100%;
    margin-top: 65px;
    padding: 0 5%;
    display: flex;
    flex-direction: row;
`;
export const CommentBlock = styled.div`
    margin-top: 65px;
    width: 100%;
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
        justify-content: space-between;
    }
    .title {
        padding-left: 20px;
        flex-basis: 30%;
    }
    p {
        font-size: var(--normal-text_size);
        max-height: 150px;
        width: auto;
        padding: 10px 0;
        overflow-y: hidden;
    }
    .comment {
        flex-basis: 50%;
    }
`;

const CommentCard = (props) => {
    const cmtData = props.data;
    return (
        <UserComment>
            <text>{cmtData.user.username}</text>
            <div style={{ display: 'flex', flexDirection: 'row' }}>
                <div style={{ backgroundColor: '#1f1f1f', width: '1px', height: 'auto', margin: '0 20px' }}></div>
                <div>
                    <div className="head">
                        <MovieImg
                            src={`data:image/jpeg;base64,${cmtData.movie.movieImg}`}
                            alt="Movie Picture"
                            style={{ width: '100px' }}
                        />
                        <div className="title">
                            <MovieTitle>{cmtData.movie.title}</MovieTitle>
                            <MvRating
                                size="medium"
                                name="rt"
                                value={cmtData.movie.movieRating}
                                precision={0.5}
                                readOnly
                            />
                        </div>
                        <p className="comment">{cmtData.ratingContent}</p>
                    </div>
                </div>
            </div>
            <div style={{ backgroundColor: '#1f1f1f', width: 'auto', height: '1px', margin: '0 20px' }}></div>
        </UserComment>
    );
};

export default function Dashboard() {
    const [data, setData] = useState([]);
    const [newMovie, setNewMovie] = useState([]);
    const [rating, setRating] = useState([]);
    const [topMovie, setTopMovie] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [wishlist, setWishlist] = useState([]);
    const [isLoad, setIsLoad] = useState(false);
    const [errorWishlist, setErrorWishlist] = useState(null);
    const { apiUrl, userId } = useContext(LoginContext);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`${apiUrl}/api/movies`, {
                    params: {
                        size: 10,
                    },
                });
                if (response.status === 200) {
                    setData(response.data.data.result);
                }
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        const fetchNewMovie = async () => {
            try {
                const response = await axios.get(`${apiUrl}/api/movies/newest`, { params: { page: 1, size: 10 } });
                if (response.status === 200 && response.data.data) {
                    setNewMovie(response.data.data);
                    console.log(response.data.data);
                } else {
                    console.error('No data returned from the API');
                }

                // setLoadedImages((prev) => prev + 5);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        const fetchNewRating = async () => {
            try {
                const response = await axios.get(`${apiUrl}/api/ratings/newest`, { params: { size: 5 } });
                setRating(response.data.data.result.content);
                // setLoadedImages((prev) => prev + 5);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };
        const fetchTopMovie = async () => {
            try {
                const response = await axios.get(`${apiUrl}/api/movies/search`, { params: { minRating: 4.5 } });
                setTopMovie(response.data.data.result);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        const fetchFunctions = [fetchTopMovie, fetchData, fetchNewMovie, fetchNewRating];
        let currentIndex = 0;

        const callNextFunction = () => {
            if (currentIndex < fetchFunctions.length) {
                fetchFunctions[currentIndex]();
                currentIndex++;
                setTimeout(callNextFunction, 500);
            }
        };

        callNextFunction();
    }, [apiUrl]);

    useEffect(() => {
        const fetchWishlist = async () => {
            try {
                setIsLoad(true);
                if (!userId) {
                    setIsLoad(false);
                    return;
                }
                const response = await axios.get(`${apiUrl}/api/wishlist/${userId}`);
                if (response.status === 200) {
                    setWishlist(response.data.data);
                }
            } catch (err) {
                setErrorWishlist(err);
            } finally {
                setIsLoad(false);
            }
        };

        fetchWishlist();
    }, [userId, apiUrl]);

    if (loading) {
        return <p>Loading...</p>;
    }

    if (error) {
        return <p>Error: {error}</p>;
    }
    return (
        <div>
            <TrendingMovie data={topMovie[1]}></TrendingMovie>
            <DashboardLayout>
                <div style={{ display: 'flex', flexDirection: 'column', margin: '10px' }}>
                    <VerticalMvList title="Top Movie" data={data} />
                    <VerticalMvList title="New Movie" data={newMovie} />
                    <CommentBlock>
                        <h3>Comment</h3>
                        {rating.map((commentData, index) => (
                            <CommentCard key={index} data={commentData} />
                        ))}
                    </CommentBlock>
                </div>
                <TranslateMvCard data={wishlist} $isLoad={isLoad} $error={error} />
            </DashboardLayout>
        </div>
    );
}
