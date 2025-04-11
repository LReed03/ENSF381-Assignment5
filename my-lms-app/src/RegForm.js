import React, { useState } from "react";
import './RegForm.css';
import SignupMessage from "./SignupMessage";

function RegForm(){
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [email, setEmail] = useState('');
    const [usernameErrors, setUsernameErrors] = useState([]);
    const [passwordErrors, setPasswordErrors] = useState([]);
    const [emailErrors, setEmailErrors] = useState([]);
    const [message, setMessage] = useState('');
    const [success, setSuccess] = useState(false);
    const [formSubmitted, setFormSubmitted] = useState(false);
    const [confirmPasswordValid, setConfirmPasswordValid] = useState();

    function validateUserName(){
        let usernameRegex = /^[a-zA-Z][a-zA-Z0-9_-]{2,19}$/;
        if(usernameRegex.test(username)){
            return true;
        }
        else{
            let usernameLengthRegex = /^.{3,20}$/;
            let allowedCharRegex = /^[a-zA-Z0-9_-]+$/;
            let letterStartRegex = /^[a-zA-Z]/;
            let noSpaces = /^\S+$/;
            const errors = [];
            if(!usernameLengthRegex.test(username)){
                errors.push("Username must be between 3 and 20 characters");
            }

            if(!allowedCharRegex.test(username)) {
                errors.push("Username can only contain letters, numbers, hyphens (-), and underscores (_)");
            }
            if(!letterStartRegex.test(username)){
                errors.push("Username must start with a letter");
            }
            if(!noSpaces.test(username)){
                errors.push("Username cannot contain spaces");
            }
            setUsernameErrors(errors);
            return false;
        }
    }


    function validatePassword(){
        let passwordRegex = /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*()\-=+\[\]{};:'",.<>?/~])(?!.* ).{8,}$/;
        const errors = [];
        if(passwordRegex.test(password)){
            setPasswordErrors(errors);
            return true;
        }
        else{
            let passwordLengthRegex = /^.{8,}$/;
            let specialCharRegex =/(?=.*[!@#$%^&*()\-=+\[\]{};:'",.<>?/~])/;
            let numberRegex = /(?=.*[0-9])/;
            let capitalRegex = /(?=.*[A-Z])/;
            let lowercaseRegex = /(?=.*[a-z])/;
            let noSpaces = /^\S+$/;
            if(!passwordLengthRegex.test(password)){
                errors.push("Password must be at least 8 characters long");
            }
            if(!specialCharRegex.test(password)){
                errors.push("Password must contain at least 1 special character");
            }
            if(!numberRegex.test(password)){
                errors.push("Password must contain at least 1 number");
            }
            if(!capitalRegex.test(password)){
                errors.push("Password must contain at least 1 uppercase letter");
            }
            if(!lowercaseRegex.test(password)){
                errors.push("Password must contain at least 1 lowercase letter");
            }
            if(!noSpaces.test(password)){
                errors.push("Password cannot contain spaces");
            }
            setPasswordErrors(errors);
            return false;
        }

    }


    function validateConfirmPassword(){
        if(password == confirmPassword){
            setConfirmPasswordValid(true);
            return true;
        }
        else{
            setConfirmPasswordValid(false);
            return false;
        }
    }

    function validateEmail(){
        const errors = [];
        let emailRegex = /^(?!.* )[a-zA-Z0-9]+@[a-zA-Z0-9]+\.(com|net|ca|io)$/;
        if(emailRegex.test(email)){
            setEmailErrors(errors);
            return true;
        }
        else{
            errors.push("Must be a valid email format (e.g. username@example.com)");
            let noSpaces = /^\S+$/;
            let containsAt = /@/
            if(!noSpaces.test(email)){
                errors.push("Email cannot contain spaces");
            }
            if(!containsAt.test(email)){
                errors.push("Email must contain the @ symbol");
            }
            setEmailErrors(errors)
            return false;
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault(); 
        setUsernameErrors([]);
        setPasswordErrors([]);
        setEmailErrors([]);
        setMessage('');
        setSuccess(false);
        let usernameValid = validateUserName();
        let passwordValid = validatePassword();
        let confirmPasswordValid = validateConfirmPassword();
        let emailValid = validateEmail();

        if(usernameValid && passwordValid && confirmPasswordValid && emailValid){
            setMessage("Signup successful! Redirecting to login...");
            setTimeout(() => {
                window.location.href = "/Login";
            }, 2000);
            setSuccess(true);
            setFormSubmitted(true);

        }
        else{
            setMessage('Invalid username or password.');
            setSuccess(false);
            setFormSubmitted(true);
        }
    }

    return(
        <div>
            <h2 class="page-title">Sign Up</h2>
            <form onSubmit={handleSubmit}>
                <div class="signup">
                    <div class="username-container">
                        <label for="Username">Username:</label>
                        <input type="text" id="username" name="username" onChange={(e) => setUsername(e.target.value)}></input>
                    </div>
                    <div class="password-container">
                        <label for="password">Password:</label>
                        <input type="password" id="password" name="password"onChange={(e) => setPassword(e.target.value)}></input>
                    </div>
                    <div class="password-container">
                        <label for="confirm-password">Confirm Password:</label>
                        <input type="password" id="confirm-password" name="password" onChange={(e) => setConfirmPassword(e.target.value)}></input>
                    </div>
                    <div class="email-container">
                        <label for="email">Email:</label>
                        <input type="text" id="email" name="email" onChange={(e) => setEmail(e.target.value)}></input>
                    </div>
                    <button class="signup-button" onclick="signup()">Sign Up</button>
                </div>
            </form>
            {formSubmitted && (
            <SignupMessage message={message} usernameErrors={usernameErrors} passwordErrors={passwordErrors} emailErrors={emailErrors} success={success} confirmPasswordValid={confirmPasswordValid}/>
            )}
        </div>
    );
}

export default RegForm;