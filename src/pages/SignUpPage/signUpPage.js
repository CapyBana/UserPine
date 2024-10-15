import React from 'react';
import { BackToHomePage, Fill, MainContent, SignInBox, SubmitButton } from './signUpPage.style';
const SignUpPage = () => {
    return (
        <div>
            <a href = "google.com">
                <BackToHomePage>⬅ Back to Home page</BackToHomePage>
            </a>
            <SignInBox>
                <h3>Be a part of Capybana Community</h3>
                <MainContent>Sign up</MainContent>
                <form action = "somewhere" method = "POST">
                    <label for = "username">Username:</label>
                    <Fill type = "text" id = "username" placeholder = "capybana" minlength = "6" maxlength = "30" required></Fill><br></br>
                    <label for = "email">Email:</label>
                    <Fill type = "email" id = "email" required></Fill><br></br>
                    <label for = "password">Password:</label>
                    <Fill type = "password" id = "password" minlength = "8" maxlength = "30" required></Fill><br></br>
                    <label for = "cfpassword">Confirm Password:</label>
                    <Fill type = "password" id = "cfpassword" minlength = "8" maxlength = "30" required></Fill><br></br>

                    <SubmitButton type = "submit" id = "submitButton">Sign up</SubmitButton>
                </form>
            </SignInBox>
        </div>
    );
}
export default SignUpPage;
