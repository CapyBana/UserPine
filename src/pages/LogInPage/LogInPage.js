import React from 'react';
import {
    BackToHomePage,
    FillInBox,
    InputBox,
    MainContent,
    SignInBox,
    SubmitButton,
} from './logInStyle';

const LogInPage = () => {
    return (
        <div>
            <a href="sign-up">
                <BackToHomePage>⬅ Back to Home page</BackToHomePage>
            </a>
            <SignInBox>
                <MainContent>Log in</MainContent>
                <form action="somewhere" method="POST">
                    <div style={{ textAlign: 'left', marginBottom: '8px' }}>
                        <text> Username or Email </text>
                    </div>
                    <InputBox style={{ position: 'relative' }}>
                        <FillInBox
                            type="text"
                            id="username"
                            minLength="6"
                            maxLength="30"
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
                    
                    <div style={{ textAlign: 'left', margin: '16px 0 8px 0' }}> {/* Tăng margin ở đây */}
                        Password
                    </div>
                    <InputBox style={{ position: 'relative' }}>
                        <FillInBox
                            type="password"
                            id="password"
                            minLength="8"
                            maxLength="30"
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
                    <div style={{ textAlign: 'center' }}>
                        <SubmitButton type="submit" id="submitButton">
                            Log in
                        </SubmitButton>
                    </div>
                </form>
            </SignInBox>
        </div>
    );
};

export default LogInPage;
