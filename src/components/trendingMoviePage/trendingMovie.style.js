import styled, { keyframes } from 'styled-components';

export const Body = styled.div`
    margin: 0;
    font-family: 'Arial', sans-serif;
    background-color: #121212;
    color: #ffffff;
`;

export const Container = styled.div`
    padding: 80px;
    max-width: 1200px;
    margin: 0 auto;
`;

export const TopMovies = styled.div`
    display: flex;
    align-items: center;
    background-color: #1a1a1a;
    border: 2px solid #111;
    border-radius: 10px;
    padding: 50px;
    margin-bottom: 40px;
    position: relative;
    height: 400px;
`;

export const Background = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: url(${(props) => props.src}); 
    background-size: cover;
    background-position: center;
    filter: blur(1px); 
    z-index: 0; 
    opacity: 0.6; 
    border-radius: 23px;

    
   
    &::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.3); 
        z-index: 1;
    }
`;

export const PosterWrapper = styled.div`
    display: flex;
    align-items: center;
    gap: 20px;
    position: relative; 
    max-width: 1000px;
    margin: 0 auto; 
    padding: 20px;
    
    @media (max-width: 768px) {
        flex-direction: column; 
        text-align: center; 
    }
`;


export const MoviePoster = styled.img`
    width: 250px;
    height: auto;
    border-radius: 8px;
    margin-right: 20px;
    transition: transform 0.3s ease, box-shadow 0.3s ease;
    border-radius: 25px;
    position: relative;

    &:hover {
        transform: scale(1.05);
        box-shadow: 0 0 20px rgba(255, 255, 255, 0.8);
    }
`;

export const MovieTitle = styled.h2`
    font-size: 50px;
    font-weight: bold;
    color: #ffffff;
    margin: 0;
    text-shadow: 0px 2px 4px rgba(0, 0, 0, 0.7);
`;

export const MovieDescription = styled.p`
    font-size: 14px; 
    color: #d1d1d1; 
    line-height: 1.5; 
    margin-top: 10px; 
    text-shadow: 0px 1px 3px rgba(0, 0, 0, 0.6);
`;

export const CategoryHeader = styled.h3`
    font-size: 18px;
    font-weight: normal;
    color: #ffffff;
    margin-bottom: 120px;
`;

export const MovieInfo = styled.div`
    flex: 1;
    z-index: 1;
`;

export const MoviesSection = styled.div`
    margin-bottom: 40px;
`;

export const SectionTitle = styled.h2`
    font-size: 1.5rem;
    margin-bottom: 20px;
`;

export const MoviesGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
    gap: 20px;
`;

export const MovieCard = styled.div`
    background: #1a1a1a;
    border-radius: 10px;
    padding: 15px;
    text-align: center;
    position: relative;
    display: flex;
    flex-direction: column; 
    align-items: center;
    justify-content: space-between; 
    height: 250px; 
`;


export const Placeholder = styled.div`
    background: rgba(255, 255, 255, 0.1);
    height: 200px;
    border-radius: 8px;
    margin-bottom: 10px;
`;

export const Rating = styled.div`
    margin-top: 10px;
    color: #ffd700;
    font-size: 1rem;
`;
