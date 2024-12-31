import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import TranslateMvCard from '~/components/MvCardEffect/TranslateMvCard';
import VerticalMvList from '~/components/VerticalMvList/VerticalMvList';

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
                        pageSize: 2,
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

    return (
        <DashboardLayout>
            <VerticalMvList data={data} />
            <TranslateMvCard data={data} />
        </DashboardLayout>
    );
}
