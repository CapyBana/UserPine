import React from 'react';
import { BackToHomePage, Capybana, FillInBox,  InputBox,  MainContent, SignInBox, SubmitButton, ThirdContent } from './signUpPage.style';
import Boxicons from 'boxicons';
const SignUpPage = () => {
    return (
        <div>
            <a href = "log-in">
                <BackToHomePage>⬅ Back to Home page</BackToHomePage>
            </a>
            <SignInBox>
                <ThirdContent>Be a part of <Capybana>Capybana Community</Capybana></ThirdContent>
                <MainContent>Sign up</MainContent>
                <form action = "somewhere" method = "POST">
                    <InputBox style = {{position: "relative"}}>
                        <FillInBox type = "text" id = "username" placeholder = "Username" minlength = "6" maxlength = "30" required></FillInBox>
                        <box-icon style = {{position: "absolute", top: "32.5%", right: "20px"}} type='solid' name='user' size="sm"></box-icon>
                    </InputBox><br></br>
                    <InputBox style = {{position: "relative"}}>
                        <FillInBox type = "email" id = "email" placeholder = "Email" required></FillInBox>
                        <box-icon style = {{position: "absolute", top: "32.5%", right: "20px"}}  type='solid' name='envelope' size="sm"></box-icon>
                    </InputBox><br></br>
                    <InputBox style = {{position: "relative"}}>
                        <FillInBox type = "password" id = "password" placeholder = "Password" minlength = "8" maxlength = "30" required></FillInBox>
                        <box-icon style = {{position: "absolute", top: "32.5%", right: "20px"}}  type='solid' name='lock-alt' size="sm"></box-icon>
                    </InputBox><br></br>
                    <InputBox style = {{position: "relative"}}>
                        <FillInBox type = "password" id = "cfpassword" placeholder = "Comfirm Password" minlength = "8" maxlength = "30" required></FillInBox>
                        <box-icon style = {{position: "absolute", top: "32.5%", right: "20px"}}  type='solid' name='lock-alt' size="sm"></box-icon>
                    </InputBox><br></br>
                    <text>Already have an account? <a href = "log-in">Log in</a></text><br></br>

                    <SubmitButton type = "submit" id = "submitButton">Sign up</SubmitButton>
                </form>
            </SignInBox>
        </div>
    );
}
export default SignUpPage;
