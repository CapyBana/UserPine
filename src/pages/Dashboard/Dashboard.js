import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import TranslateMvCard from '~/components/MvCardEffect/TranslateMvCard';
import VerticalMvList from '~/components/VerticalMvList/VerticalMvList';
import narutoImg from 'src/assets/images/naruto.png';
import onePieceImg from 'src/assets/images/one_piece.png';

export const DashboardLayout = styled.div`
    width: 100%;
    padding: 0 5%;
    display: flex;
    flex-direction: column;
`;

export default function Dashboard() {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const apiUrl = process.env.REACT_APP_API_URL;

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
            <VerticalMvList title="top Movie" data={hardData} />
            <TranslateMvCard data={hardData} />
        </DashboardLayout>
    );
}
