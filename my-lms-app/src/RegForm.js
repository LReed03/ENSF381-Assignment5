import React from "react";
import './RegForm.css';

function RegForm(){
    return(
        <div>
            <h2 class="page-title">Sign Up</h2>
            <div class="signup">
                <div class="username-container">
                    <label for="Username">Username:</label>
                    <input type="text" id="username" name="username" required></input>
                </div>
                <div class="password-container">
                    <label for="password">Password:</label>
                    <input type="password" id="password" name="password" required></input>
                </div>
                <div class="password-container">
                    <label for="confirm-password">Confirm Password:</label>
                    <input type="password" id="confirm-password" name="password" required></input>
                </div>
                <div class="email-container">
                    <label for="email">Email:</label>
                    <input type="text" id="email" name="email" required></input>
                </div>
                <button class="signup-button" onclick="signup()">Sign Up</button>
            </div>
        </div>
    );
}

export default RegForm;