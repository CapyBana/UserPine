import React from 'react';
import { BackToHomePage, Capybana, Content, FillInBox,  InputBox,  MainContent, SignInBox, SignInPage, SubmitButton} from './signUpPage.style';
import Boxicons from 'boxicons';
const SignUpPage = () => {
    return (
        <div>
            <SignInPage>
                <a href = "log-in">
                    <Content>⬅ Back to Home page</Content>
                </a>
                <SignInBox>
                    <Content>Be a part of <Capybana>Capybana Community</Capybana></Content>
                    <MainContent>Sign up</MainContent>
                    <div style = {{size: "75%"}}>
                    <form action = "somewhere" method = "POST">
                            <InputBox style = {{position: "relative"}}>
                                <FillInBox type = "text" id = "username" placeholder = "Username" minlength = "6" maxlength = "30" required></FillInBox>
                                <box-icon style = {{position: "absolute", top: "26%", right: "20px"}} type='solid' name='user' size="sm"></box-icon>
                            </InputBox>
                            <InputBox style = {{position: "relative"}}>
                                <FillInBox type = "email" id = "email" placeholder = "Email" required></FillInBox>
                                <box-icon style = {{position: "absolute", top: "26%", right: "20px"}}  type='solid' name='envelope' size="sm"></box-icon>
                            </InputBox>
                            <InputBox style = {{position: "relative"}}>
                                <FillInBox type = "password" id = "password" placeholder = "Password" minlength = "8" maxlength = "30" required></FillInBox>
                                <box-icon style = {{position: "absolute", top: "26%", right: "20px"}}  type='solid' name='lock-alt' size="sm"></box-icon>
                            </InputBox>
                            <InputBox style = {{position: "relative"}}>
                                <FillInBox type = "password" id = "cfpassword" placeholder = "Confirm Password" minlength = "8" maxlength = "30" required></FillInBox>
                                <box-icon style = {{position: "absolute", top: "26%", right: "20px"}}  type='solid' name='lock-alt' size="sm"></box-icon>
                            </InputBox>
                            <Content>Already have an account? <a href = "log-in">Log in</a></Content><br></br>

                            <SubmitButton type = "submit" id = "submitButton">Sign up</SubmitButton>
                        </form>
                    </div>
                </SignInBox>
            </SignInPage>
        </div>
    );
}
export default SignUpPage;
