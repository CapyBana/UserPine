import React, { useContext, useState } from 'react';
import { Capybana, InputBox, SignInBox, SignInLayout, SignInPage } from './signUpPage.style';
import ReturnBlock from '~/components/ReturnLink/Return';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { LoginContext } from '~/context/loginContext';
import StatusCard from '~/components/Notification/NotiMess';
// import Boxicons from 'boxicons'; //để nguyên cái này đừng xoá nha
const SignUpPage = ({ handlePage }) => {
    const { apiUrl } = useContext(LoginContext);
    const [loggedInSuccess, setLoggedInSuccess] = useState(false);
    const [openMessage, setOpenMessage] = useState(false);
    const [successMessage, setSuccessMessage] = useState(null);
    const [errorMessage, setErrorMessage] = useState(null);

    const [formData, setFormData] = useState({
        username: '',
        email: '',
        password: '',
        cfpassword: '',
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.id]: e.target.value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (formData.password !== formData.cfpassword) {
            setErrorMessage("Passwords do not match");
            return;
        }

        try {
            const response = await axios.post(`${apiUrl}/api/users`, {
                username: formData.username,
                email: formData.email,
                password: formData.password,
                isAdmin: 0,
            });

            if (response.status === 201) {
                // setSuccess('Signup successfully!');
                // setError(null);
                setLoggedInSuccess(true);
                setSuccessMessage('Signup successfully!');
                //handlePage('log-in');
                console.log(response);
            }
        } catch (err) {
            setErrorMessage('An error occured. Please try again.');
            //setError(err.response?.data?.message || 'An error occured. Please try again.');
        }
    };

    return (
        <SignInLayout>
            <script src="https://unpkg.com/boxicons@2.1.4/dist/boxicons.js"></script>
            <SignInPage>
                <Link
                    to="/"
                    style={{
                        textDecoration: 'none',
                        width: '400px',
                        padding: '80px 2.5% 15px',
                    }}
                >
                    <ReturnBlock backmessage="Back to homepage" />
                </Link>
                <SignInBox>
                    <text class="intro">
                        Be a part of <Capybana>Capybana Community</Capybana>
                    </text>
                    <h1 class="mainContent">Sign up</h1>
                    <form onSubmit={handleSubmit} class="PC">
                        <InputBox style={{ position: 'relative' }}>
                            <input
                                class="fillInBox"
                                type="text"
                                id="username"
                                placeholder="Username"
                                minlength="6"
                                maxlength="30"
                                value={formData.username}
                                onChange={handleChange}
                                required
                            ></input>
                            <box-icon type="solid" name="user" size="sm"></box-icon>
                        </InputBox>
                        <InputBox style={{ position: 'relative' }}>
                            <input
                                class="fillInBox"
                                type="email"
                                id="email"
                                placeholder="Email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                            ></input>
                            <box-icon type="solid" name="envelope" size="sm"></box-icon>
                        </InputBox>
                        <InputBox style={{ position: 'relative' }}>
                            <input
                                class="fillInBox"
                                type="password"
                                id="password"
                                placeholder="Password"
                                minlength="8"
                                maxlength="30"
                                value={formData.password}
                                onChange={handleChange}
                                required
                            ></input>
                            <box-icon type="solid" name="lock-alt" size="sm"></box-icon>
                        </InputBox>
                        <InputBox style={{ position: 'relative' }}>
                            <input
                                class="fillInBox"
                                type="password"
                                id="cfpassword"
                                placeholder="Confirm Password"
                                minlength="8"
                                maxlength="30"
                                value={formData.cfpassword}
                                onChange={handleChange}
                                required
                            ></input>
                            <box-icon type="solid" name="lock-alt" size="sm"></box-icon>
                        </InputBox>
                        <text>
                            Already have an account? <a href="log-in">Log in</a>
                        </text>
                        <button type="submit" id="submitButton" onClick={() => setOpenMessage(true)}>
                            Sign up
                        </button>
                    </form>
                </SignInBox>
            </SignInPage>
            {openMessage && (
                <StatusCard
                    success={loggedInSuccess}
                    message={successMessage}
                    error={errorMessage}
                    handlePage={() => handlePage('log-in')}
                    handleOpenMessage={() => setOpenMessage(false)}
                />
            )}
        </SignInLayout>
    );
};
export default SignUpPage;

// username: user123 pw: user123@
