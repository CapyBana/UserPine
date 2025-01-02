import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    background-color: #100c0c;
    padding: 20px;
`;

export const Card = styled.div`
    background: #d9d9d9;
    border-radius: 12px;
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.15);
    width: 400px;
    height: 400px;
    text-align: center;
    padding: 33px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    z-index: 10 !important ;
    position: absolute;
    left: 50%;
    top: 50%;
    translate: -50% -50%;
`;

export const StatusIcon = styled.div`
    margin-top: 5px;
    font-size: 70px;
    color: ${(props) => (props.success ? '#4CAF50' : '#F44336')};
    margin-bottom: 1px;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const Title = styled.h2`
    font-family: 'Roboto', sans-serif;
    font-size: 25px;
    font-weight: bold;
    color: ${(props) => (props.success ? '#4CAF50' : '#F44336')};
    margin-top: 8px;
    text-transform: uppercase;
`;

export const Message = styled.p`
    font-family: 'Roboto', sans-serif;
    font-size: 17px;
    color: #4a4a4a;
    margin: -10px 0;
    line-height: 1.5;
    font-weight: bold;
    margin-top: 15px;
`;

export const SubMessage = styled.p`
    font-family: 'Roboto', sans-serif;
    font-size: 15px;
    color: #4a4a4a;
    margin: 20px 0;
    margin-bottom: 30px;
    line-height: 1.4;
`;

export const Button = styled.button`
    font-family: 'Roboto', sans-serif;
    background-color: ${(props) => (props.success ? '#4CAF50' : '#F44336')};
    color: #ffffff;
    border: none;
    border-radius: 5px;
    padding: 12px 20px;
    font-size: 17px;
    font-weight: bold;
    cursor: pointer;
    transition: background-color 0.3s ease;

    &:hover {
        background-color: ${(props) => (props.success ? '#45a049' : '#d32f2f')};
    }
`;
