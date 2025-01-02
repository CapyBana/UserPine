import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import TranslateMvCard from '~/components/MvCardEffect/TranslateMvCard';
import VerticalMvList from '~/components/VerticalMvList/VerticalMvList';
import narutoImg from 'src/assets/images/naruto.png';
import onePieceImg from 'src/assets/images/one_piece.png';
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
export default function Dashboard() {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const apiUrl = process.env.REACT_APP_API_URL;
    const [rating] = useState(4.5);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = axios.get(`${apiUrl}/api/movies`, {
                    params: {
                        current: 1,
                        pageSize: 10,
                    },
                });
                setData(response.data);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };
        fetchData();
    }, []);

    if (loading) {
        return <p>Loading...</p>;
    }

    if (error) {
        return <p>Error: {error}</p>;
    }
    const hardData = [
        { name: 'Inception', rating: 4, img: narutoImg },
        { name: 'The Dark Knight', rating: 3.5, img: onePieceImg },
        { name: 'Interstellar', rating: 4, img: narutoImg },
        { name: 'Parasite', rating: 4.5, img: onePieceImg },
        { name: 'Avengers: Endgame', rating: 3, img: narutoImg },
        { name: 'The Shawshank Redemption', rating: 2.5, img: onePieceImg },
        { name: 'Pulp Fiction', rating: 3, img: narutoImg },
        { name: 'The Godfather', rating: 4.5, img: onePieceImg },
    ];

    return (
        <DashboardLayout>
            <div style={{display: "flex", flexDirection: "column"}}>
                <VerticalMvList title="Top Movie" data={hardData} />
                <CommentBlock>
                    <h3>Comment</h3>
                    <UserComment>
                        <text>Username</text>
                        <div style={{display: "flex", flexDirection: "row"}}>
                            <div style={{backgroundColor: "#1f1f1f", width: "1px", height: "auto", margin: "0 20px"}}></div>
                            <div>
                                <div class="head">
                                    <MovieImg src={narutoImg} alt="Movie Picture" 
                                        style={{width: "100px"}}/>
                                    <div class="title">
                                        <MovieTitle>Movie title</MovieTitle>
                                        <MvRating
                                            size="medium"
                                            name="rt"
                                            value={rating}
                                            precision={0.5}
                                            readOnly
                                        />
                                    </div>
                                </div>
                                <text>Review title</text>
                                <p>Lorem nkjdvnkjdnfvksndvndsjkvnnesergeeriegbijreijbijbjLorem nkjdvnkjdnfvksndvndsjkvnnesergeeriegbijreijbijbjLorem nkjdvnkjdnfvksndvndsjkvnnesergeeriegbijreijbijbjLorem nkjdvnkjdnfvksndvndsjkvnnesergeeriegbijreijbijbjLorem nkjdvnkjdnfvksndvndsjkvnnesergeeriegbijreijbijbjLorem nkjdvnkjdnfvksndvndsjkvnnesergeeriegbijreijbijbjLorem nkjdvnkjdnfvksndvndsjkvnnesergeeriegbijreijbijbjLorem nkjdvnkjdnfvksndvndsjkvnnesergeeriegbijreijbijbjLorem nkjdvnkjdnfvksndvndsjkvnnesergeeriegbijreijbijbjLorem nkjdvnkjdnfvksndvndsjkvnnesergeerie
                                gbijreijbijbjLorem nkjdvnkjdnfvksndvndsjkvnnesergeeriegbijreijbijbjLorem nkjdvnkjdnfvksndvndsjkvnnesergeeriegbijreijbijbjLorem nkjdvnkjdnfvksndvndsjkvnnesergeeriegbijreijbijbjLorem nkjdvnkjdnfvksndvndsjkvnnesergeeriegbijreijbijbj
                                Lorem nkjdvnkjdnfvksndvndsjkvnnesergeeriegbijreijbijbjLorem nkjdvnkjdnfvksndvndsjkvnnesergeeriegbijreijbijbjLorem nkjdvnkjdnfvksndvndsjkvnnesergeeriegbijreijbijbjLorem nkjdvnkjdnfvksndvndsjkvnnesergeeriegbijreijbijbjLorem nkjdvnkjdnfvksndvndsjkvnnesergeeriegbijreijbijbjLorem nkjdvnkjdnfvksndvndsjkvnnesergeeriegbijreijbijbjLorem nkjdvnkjdnfvksndvndsjkvnnesergeeriegbijreijbijbjLorem nkjdvnkjdnfvksndvndsjkvnnesergeeriegbijreijbijbjLorem nkjdvnkjdnfvksndvndsjkvnnesergeeriegbijreijbijbjLorem nkjdvnkjdnfvksndvndsjkvnnesergeeriegbijreijbijbjLorem nkjdvnkjdnfvksndvndsjkvnnesergeeriegbijreijbijbjLorem nkjdvnkjdnfvksndvndsjkvnnesergeeriegbijreijbijbjLorem nkjdvnkjdnfvksndvndsjkvnnesergeeriegbijreijbijbjLorem nkjdvnkjdnfvksndvndsjkvnnesergeeriegbijreijbijbjLorem nkjdvnkjdnfvksndvndsjkvnnesergeeriegbijreijbijbjLorem nkjdvnkjdnfvksndvndsjkvnnesergeeriegbijreijbijbjLorem nkjdvnkjdnfvksndvndsjkvnnesergeeriegbijreijbijbjLorem nkjdvnkjdnfvksndvndsjkvnnesergeeriegbijreijbijbjLorem nkjdvnkjdnfvksndvndsjkvnnesergeeriegbijreijbijbj
                                </p>
                            </div>
                        </div>
                        <div style={{backgroundColor: "#1f1f1f", width: "auto", height: "1px", margin: "0 20px"}}></div>
                    </UserComment>
                </CommentBlock>
            </div>
            <TranslateMvCard data={hardData} />
        </DashboardLayout>
    );
}
