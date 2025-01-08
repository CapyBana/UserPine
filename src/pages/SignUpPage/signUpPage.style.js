import styled from 'styled-components';
export const SignInLayout = styled.div``;

export const SignInPage = styled.div`
    width: 100vw;
    height: 100vh;
    position: fixed;
    background: rgba(0, 0, 0, 0.5) !important;
    backdrop-filter: blur(10px);
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
    transition: opacity 225ms cubic-bezier(0.4, 0, 0.2, 1);
    inset: 0px;
    z-index: 1;
    text {
        text-align: center;
        color: #fae6e5;
        font-size: var(--medium-text_size);
    }
    @media (max-width: 480px) {
        font-size: var(--normal-text_size);
    }
    @media (min-width: 480px) and (max-width: 768px) {
        font-size: var(--large-text_size);
    }
`;
export const SignInBox = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 35%;
    font-family: arial;
    background-color: #100c0c;
    color: #fae6e5;
    justify-content: space-between;
    text-align: center;
    border-radius: 45px;
    padding: 1% 4%;

    .mainContent {
        text-align: center;
        color: #fae6e5;
        font-style: strong;
        font-size: var(--primary-text_size);
        margin-top: 2%;
        margin-bottom: 8%;
    }
    form {
        display: flex;
        flex-direction: column;
        gap: 8px;
        button {
            height: 100%;
            padding: 2.5% 5%;
            margin: 2%;
            background-color: #1d269a;
            color: #fae6e5;
            border-radius: 45px;
            font-size: var(--large-text_size);
            text-align: center;
            cursor: pointer;
            border: none;
            &:hover {
                background-color: #152157; /* Darker shade on hover */
                transition: background-color 0.3s ease; /* Smooth transition */
            }
        }
        .fillInBox {
            padding: 2% 9% 2% 4%;
            width: 100%;
            height: 100%;
            background-color: transparent;
            font-size: var(--medium-text_size);
            color: #fae6e5;
            outline: none;
            border: none;
        }
    }
    @media (max-width: 480px) {
        width: 90%;
        padding: 5% 8% 5% 8%;
        form {
            button {
                padding: 4% 7%;
                margin-bottom: 0;
                font-size: var(--medium-text_size);
                border: none;
            }
            .fillInBox {
                padding: 4% 9% 4% 6%;
            }
        }
        .mainContent {
            font-size: var(--primary-text_size);
            margin-top: 0;
            margin-bottom: 2%;
        }
    }
    @media (min-width: 480px) and (max-width: 768px) {
        width: 80%;
        padding: 5% 8% 5% 8%;
        form {
            button {
                padding: 3.5% 6%;
                margin-bottom: 0;
                font-size: var(--large-text_size);
                border: none;
            }
            .fillInBox {
                padding: 3% 9% 3% 4%;
            }
        }
        .mainContent {
            font-size: var(--super-text_size);
            margin-top: 0;
            margin-bottom: 2%;
        }
    }

    @media (min-width: 768px) and (max-width: 1024px) {
        width: 75%;
        padding: 5% 8% 5% 8%;
        margin-top: 4%;
        form {
            button {
                padding: 3.5% 6%;
                margin-bottom: 0;
                font-size: var(--large-text_size);
                border: none;
            }
            .fillInBox {
                padding: 3% 9% 3% 4%;
            }
        }
        .mainContent {
            font-size: var(--super-text_size);
            margin-top: 0;
            margin-bottom: 2%;
        }
    }
`;
export const InputBox = styled.div`
    width: 100%;
    height: 100%;
    background-color: #231b1b;
    align-content: center;
    color: #fae6e5;
    border: none;
    border-radius: 15px;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 2.5%;

    box-icon {
        position: absolute;
        top: 22%;
        right: 18px;
    }

    @media (max-width: 480px) {
        margin-bottom: 4%;
    }
    @media (min-width: 480px) and (max-width: 768px) {
        margin-bottom: 2.5%;
        box-icon {
            position: absolute;
            top: 23%;
            right: 18px;
        }
    }
    @media (min-width: 768px) and (max-width: 1024px) {
        margin-bottom: 2.5%;
        box-icon {
            position: absolute;
            top: 28%;
            right: 18px;
        }
    }
`;
export const Capybana = styled.text`
    font-family: algerian, fantasy;
    justify-content: center;
    font-size: var(--large-text_size);
    @media (max-width: 480px) {
        font-size: var(--normal-text_size);
    }
`;
