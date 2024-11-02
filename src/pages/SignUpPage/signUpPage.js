import React from 'react';
import { Capybana, InputBox, SignInBox, SignInPage } from './signUpPage.style';
import Boxicons from 'boxicons'; //để nguyên cái này đừng xoá nha
const SignUpPage = () => {
    return (
        <div>
            <script src="https://unpkg.com/boxicons@2.1.4/dist/boxicons.js"></script>
            <SignInPage>
                <a href="log-in">
                    <text>⬅ Back to Home page</text>
                </a>
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
        </div>
    );
};
export default SignUpPage;
