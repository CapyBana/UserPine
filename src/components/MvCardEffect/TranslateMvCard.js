import React, { useState } from 'react';
import styled from 'styled-components';
import { useEffect } from 'react';

export const EffectCardContainer = styled.div`
    background-color: var(--blue-effect);
    width: fit-content;
    border-radius: 16px;
    height: fit-content;
`;
export const EffectMovie = styled.div`
    width: 240px;
    padding: 16px;
    gap: 8px;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const TranslateMvCard = (props) => {
    const mvData = props.data || [];
    const [idx, setIdx] = useState(0);
    useEffect(() => {
        const interval = setInterval(() => {
            setIdx((prevIdx) => (prevIdx + 1) % mvData.length);
        }, 2000);

        return () => clearInterval(interval);
    }, [mvData]);
    return (
        <EffectCardContainer>
            <EffectMovie>
                <h4>From your wishlist</h4>
                {mvData.length > 0 ? (
                    <>
                        <img
                            style={{ height: '250px', width: '90%', borderRadius: '16px' }}
                            src={`data:image/jpeg;base64,${mvData[idx].movieImg}`}
                            alt="Slideshow"
                        ></img>
                        <h3>{mvData[idx].title}</h3>
                    </>
                ) : 
                (
                    <p>No movie in wishlist</p>
                )}
                {props.$isLoad && <p>Loading...</p>}
                {props.$error && <p>{props.$error}</p>}
            </EffectMovie>
        </EffectCardContainer>
    );
};

export default TranslateMvCard;
