import React, { useContext, useState } from 'react';
import { FillInBox, InputBox, LogInLayout, MainContent, SignInBox, SubmitButton } from './logInStyle';
import axios from 'axios';
import { LoginContext } from '~/context/loginContext';

const LogInPage = ({ handlePage }) => {
    const { login, apiUrl } = useContext(LoginContext);

    const [formData, setFormData] = useState({
        username: '',
        password: '',
    });

    const [error, setError] = useState(null);
    const [success, setSuccess] = useState(null);

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.id]: e.target.value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post(`${apiUrl}/login`, {
                username: formData.username,
                password: formData.password,
            });

            if (response.status === 200) {
                const userId = response.data.data.userId;
                setSuccess('Login successfully!');
                setError(null);
                login(userId);
                handlePage('/');
            }
        } catch (err) {
            setError(err.response?.data?.message || 'An error occurred. Please try again.');
        }
    };

    return (
        <LogInLayout>
            <script src="https://unpkg.com/boxicons@2.1.4/dist/boxicons.js"></script>
            <SignInBox>
                <MainContent>Log in</MainContent>
                <form onSubmit={handleSubmit}>
                    <div style={{ textAlign: 'left', marginBottom: '8px' }}>
                        <text> Username or Email </text>
                    </div>
                    <InputBox style={{ position: 'relative' }}>
                        <FillInBox
                            type="text"
                            id="username"
                            minLength="6"
                            maxLength="30"
                            value={formData.username}
                            onChange={handleChange}
                            required
                        />
                        <box-icon
                            style={{ position: 'absolute', top: '32.5%', right: '20px' }}
                            type="solid"
                            name="user"
                            size="sm"
                        />
                    </InputBox>
                    <br />
                    <InputBox style={{ position: 'relative' }} />

                    <div style={{ textAlign: 'left', margin: '16px 0 8px 0' }}>
                        {' '}
                        {/* Tăng margin ở đây */}
                        Password
                    </div>
                    <InputBox style={{ position: 'relative' }}>
                        <FillInBox
                            type="password"
                            id="password"
                            minLength="8"
                            maxLength="30"
                            value={formData.password}
                            onChange={handleChange}
                            required
                        />
                        <box-icon
                            style={{ position: 'absolute', top: '32.5%', right: '20px' }}
                            type="solid"
                            name="lock-alt"
                            size="sm"
                        />
                    </InputBox>
                    <br />
                    <InputBox style={{ position: 'relative' }} />

                    {/* Centered link */}
                    <div style={{ textAlign: 'center' }}>
                        <a href="sign-up">Forgot password • Create an account</a>
                    </div>
                    <br />
                    {/* Centered Submit Button */}
                    {error && <p style={{ color: 'red' }}>{error}</p>}
                    {success && <p style={{ color: 'green' }}>{success}</p>}
                    <div style={{ textAlign: 'center' }}>
                        <SubmitButton type="submit" id="submitButton">
                            Log in
                        </SubmitButton>
                    </div>
                </form>
            </SignInBox>
        </LogInLayout>
    );
};

export default LogInPage;
