import React, { useContext, useEffect, useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import TranslateMvCard from '~/components/MvCardEffect/TranslateMvCard';
import VerticalMvList from '~/components/VerticalMvList/VerticalMvList';
import { LoginContext } from '~/context/loginContext';
import narutoImg from 'src/assets/images/naruto.png';
import { MvRating } from '~/components/VerticalMvCard/VerticalMvCard.style';
import { MovieImg, MovieTitle } from '~/components/ReviewForm/ReviewForm.style';

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
    }
    .title {
        padding-left: 20px;
    }
    p {
        font-size: var(--normal-text_size);
        max-height: 150px;
        width: auto;
        padding: 10px 0;
        overflow-y: hidden;
    }
    text {
        font-size: var(--medium-text_size);
    }
`;

const CommentCard = (props) => {
    const cmtData = props.data;
    return (
        <UserComment>
            <text>{cmtData.username}</text>
            <div style={{ display: 'flex', flexDirection: 'row' }}>
                <div style={{ backgroundColor: '#1f1f1f', width: '1px', height: 'auto', margin: '0 20px' }}></div>
                <div>
                    <div className="head">
                        <MovieImg src={narutoImg} alt="Movie Picture" style={{ width: '100px' }} />
                        <div className="title">
                            <MovieTitle>{cmtData.title}</MovieTitle>
                            <MvRating size="medium" name="rt" value={cmtData.rating} precision={0.5} readOnly />
                        </div>
                    </div>
                    <p>{cmtData.review}</p>
                </div>
            </div>
            <div style={{ backgroundColor: '#1f1f1f', width: 'auto', height: '1px', margin: '0 20px' }}></div>
        </UserComment>
    );
};

export default function Dashboard() {
    const [data, setData] = useState([]);
    const [newMovie, setNewMovie] = useState([]);
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
                setData(response.data.data.result);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        const fetchWishlist = async () => {
            try {
                setIsLoad(true);
                if (!userId) {
                    setIsLoad(false); // Stop loading if user is not logged in
                    return;
                }
                const response = await axios.get(`${apiUrl}/api/wishlist/${userId}`);
                if (response.status === 200) {
                    setWishlist(response.data.data.movies);
                    console.log(response.data.data.movies);
                }
            } catch (err) {
                setErrorWishlist(err);
            } finally {
                setIsLoad(false); // Ensure loading stops regardless of success or failure
            }
        };
        fetchNewMovie();
        fetchWishlist();
        fetchData();
    }, [apiUrl, userId]);

    const fetchNewMovie = async () => {
        try {
            const response = await axios.get(`${apiUrl}/api/movies/newest`, { params: { size: 8 } });
            setNewMovie(response.data.data);
        } catch (err) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };
    const fetchNewRating = async () => {
        try {
            const response = await axios.get(`${apiUrl}/api/ratings/newest`, { params: { size: 5 } });
        } catch (err) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };

    if (loading) {
        return <p>Loading...</p>;
    }

    if (error) {
        return <p>Error: {error}</p>;
    }

    const sth = {
        username: 'aptapt',
        img: narutoImg,
        title: 'Naruto',
        rating: 4,
        review: 'hhsdbhcjscsjfwfwffoiwfofknfknkscnkjsnhwfhwknkwfhifhk',
    };
    return (
        <DashboardLayout>
            <div style={{ display: 'flex', flexDirection: 'column', margin: '10px' }}>
                <VerticalMvList title="Top Movie" data={data} />
                <VerticalMvList title="New Movie" data={newMovie} />

                <CommentBlock>
                    <h3>Comment</h3>
                    <CommentCard data={sth} />
                </CommentBlock>
            </div>
            <TranslateMvCard data={wishlist} />
        </DashboardLayout>
    );
}
