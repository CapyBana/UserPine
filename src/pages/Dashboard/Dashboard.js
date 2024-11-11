import React from 'react';
import styled from 'styled-components';
import TranslateMvCard from '~/components/MvCardEffect/TranslateMvCard';
import VerticalMvList from '~/components/VerticalMvList/VerticalMvList';
export const DashboardLayout = styled.div`
    width: 100%;
    padding: 0 5%;
    display: flex;
    flex-direction: column;
`;

export default function Dashboard() {
    return (
        <DashboardLayout>
            <VerticalMvList />
            <TranslateMvCard />
        </DashboardLayout>
    );
}
