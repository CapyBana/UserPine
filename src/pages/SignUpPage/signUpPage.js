import React, { useState } from 'react';
import { Capybana, InputBox, SignInBox, SignInLayout, SignInPage } from './signUpPage.style';
import ReturnBlock from '~/components/ReturnLink/Return';
import { Link } from 'react-router-dom';
import axios from 'axios';
// import Boxicons from 'boxicons'; //để nguyên cái này đừng xoá nha
const SignUpPage = ({handlePage}) => {
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        password: '',
        cfpassword: '',
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

        if (formData.password !== formData.cfpassword) {
            setError('Passwords do not match');
            return;
        }

        try {
            const response = await axios.post('http://192.168.1.170:8080/api/users', {
                username: formData.username,
                email: formData.email,
                password: formData.password,
                isAdmin: 0,
            });

            if (response.status === 201) {
                setSuccess('Signup successfully!');
                setError(null);
                handlePage('log-in');
                console.log(response);
            }
        } catch (err) {
            setError(err.response?.data?.message || 'An error occured. Please try again.');
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
                        {error && <p style={{ color: 'red' }}>{error}</p>}
                        {success && <p style={{ color: 'green' }}>{success}</p>}
                        <text>
                            Already have an account? <a href="log-in">Log in</a>
                        </text>
                        <button type="submit" id="submitButton">
                            Sign up
                        </button>
                    </form>
                </SignInBox>
            </SignInPage>
        </SignInLayout>
    );
};
export default SignUpPage;

// username: user123 pw: user123@
