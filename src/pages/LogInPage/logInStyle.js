import styled from 'styled-components';
export const LogInLayout = styled.div`
    width: 100%;
    height: 100vh;
    position: fixed;
    background: rgba(0, 0, 0, 0.5) !important;
    backdrop-filter: blur(10px);
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
    transition: opacity 225ms cubic-bezier(0.4, 0, 0.2, 1);
    inset: 0px;
    z-index: 1;
`;
export const SubmitButton = styled.button`
    height: 100%;
    padding: 4% 10%;
    margin: 2%;
    background-color: #1d269a;
    color: #fae6e5;
    border-radius: 45px;
    font-size: 1.3em;
    text-align: center;
    cursor: pointer;
    border: none;

    &:hover {
        background-color: #152157; /* Darker shade on hover */
        transition: background-color 0.3s ease; /* Smooth transition */
    }
`;

export const SignInBox = styled.div`
    width: 50%;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    display: flex;
    flex-direction: column;
    font-family: unbounded, arial;
    background-color: #100c0c;
    color: #fae6e5;
    justify-content: space-between;
    text-align: left; /* Change to left for alignment */
    border-radius: 45px;
    padding: 5% 10%;
`;

export const MainContent = styled.h1`
    text-align: center;
    color: #fae6e5;
    font-weight: bold; /* Changed from font-style to font-weight */
    font-size: 2.5em;
`;

export const ThirdContent = styled.h3`
    text-align: center;
    color: #fae6e5;
    font-family: 'Times New Roman', serif; /* Added fallback */
    font-size: 1.5em;
`;

export const InputBox = styled.div`
    width: 100%;
    height: 100%;
    background-color: #231b1b;
    color: #fae6e5;
    border: none;
    border-radius: 20px;
    margin: auto;
`;

export const FillInBox = styled.input`
    padding: 20px 45px 20px 20px;
    width: 100%;
    height: 100%;
    background-color: transparent;
    color: #fae6e5;
    outline: none;
    border: none;
`;

export const BackToHomePage = styled.button`
    background-color: transparent;
    margin: 20px 25px;
    color: #dcd1d1;
    border: none;
    cursor: pointer;
`;

export const Capybana = styled.h3`
    font-family: fantasy;
    text-align: center; /* Ensured center alignment */
`;
