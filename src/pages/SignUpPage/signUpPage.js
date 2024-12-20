import React from 'react';
import { Capybana, InputBox, SignInBox, SignInLayout, SignInPage } from './signUpPage.style';
import ReturnBlock from '~/components/ReturnLink/Return';
import { Link } from 'react-router-dom';
// import Boxicons from 'boxicons'; //để nguyên cái này đừng xoá nha
const SignUpPage = () => {
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
                    <form action="somewhere" method="POST" class="PC">
                        <InputBox style={{ position: 'relative' }}>
                            <input
                                class="fillInBox"
                                type="text"
                                id="username"
                                placeholder="Username"
                                minlength="6"
                                maxlength="30"
                                required
                            ></input>
                            <box-icon type="solid" name="user" size="sm"></box-icon>
                        </InputBox>
                        <InputBox style={{ position: 'relative' }}>
                            <input class="fillInBox" type="email" id="email" placeholder="Email" required></input>
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
                                required
                            ></input>
                            <box-icon type="solid" name="lock-alt" size="sm"></box-icon>
                        </InputBox>
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
