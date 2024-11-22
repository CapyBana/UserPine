import React from 'react';
import { InputBox, SignInBox, SignInLayout, SignInPage } from './logInStyle';

const LogInPage = () => {
    return (
        <SignInLayout>
            <script src="https://unpkg.com/boxicons@2.1.4/dist/boxicons.js"></script>
            <SignInPage>
                <a href="sign-up">
                    <text>⬅ Back to Home page</text>
                </a>
                <SignInBox>
                    <h1 className="mainContent">Log In</h1>
                    <form action="somewhere" method="POST" className="PC">
                        {/* Username or Email Label */}
                        <div style={{ textAlign: 'left', margin: '16px 0 8px 0' }}>
                            <text style={{ fontSize: '23px' }}>Username or Email</text>
                        </div>
                        <InputBox style={{ position: 'relative' }}>
                            <input
                                className="fillInBox"
                                type="text"
                                id="username"
                                minLength="6"
                                maxLength="30"
                                required
                            />
                            <box-icon type="solid" name="user" size="sm"></box-icon>
                        </InputBox>
                        
                        {/* Password Label */}
                        <div style={{ textAlign: 'left', margin: '16px 0 8px 0' }}>
                            <text style={{ fontSize: '23px' }}>Password</text>
                        </div>
                        <InputBox style={{ position: 'relative' }}>
                            <input
                                className="fillInBox"
                                type="password"
                                id="password"
                                minLength="8"
                                maxLength="30"
                                required
                            />
                            <box-icon type="solid" name="lock-alt" size="sm"></box-icon>
                        </InputBox>
                        <text>
                            <a href="sign-up" style={{ color: 'white' }}>Forgot password • Create an account</a>
                        </text>                        
                        <button type="submit" id="submitButton">
                        <text style={{ fontSize: '30px' }}>Log in</text>
                        </button>
                    </form>
                </SignInBox>
            </SignInPage>
        </SignInLayout>
    );
};

export default LogInPage;
