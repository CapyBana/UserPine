import React, { useState } from 'react';
import styled from 'styled-components';
import narutoImg from 'src/assets/images/naruto.png';
import { useEffect } from 'react';
import onePieceImg from 'src/assets/images/one_piece.png';

export const EffectCardContainer = styled.div`
    background-color: var(--blue-effect);
    width: fit-content;
    border-radius: 16px;
`;
export const EffectMovie = styled.div`
    padding: 16px;
`;

const TranslateMvCard = () => {
    let imgList = [narutoImg, onePieceImg];
    const [idx, setIdx] = useState(0);
    useEffect(() => {
        const interval = setInterval(() => {
            setIdx((prevIdx) => (prevIdx + 1) % imgList.length);
        }, 2000);

        return () => clearInterval(interval);
    }, [imgList.length]);
    return (
        <EffectCardContainer>
            <EffectMovie>
                <h4>From your wishlist</h4>
                <img
                    style={{ height: '250px', width: '170px', borderRadius: '16px' }}
                    src={imgList[idx]}
                    alt="Slideshow"
                ></img>
            </EffectMovie>
        </EffectCardContainer>
    );
};

export default TranslateMvCard;
