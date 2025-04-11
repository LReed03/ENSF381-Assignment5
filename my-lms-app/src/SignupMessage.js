import React from "react";

import './RegForm.css';



function SignupMessage({ message, usernameErrors, passwordErrors, emailErrors, success, confirmPasswordValid }) {
    return (
        <div id="dynamicBox">
            {success === false ? (
                <>
                    <div>
                        {usernameErrors.length === 0 ? (
                            <p>Valid Username</p>
                        ) : (
                            <p>Invalid Username: ({usernameErrors.join(', ')})</p>
                        )}
                    </div>

                    <div>
                        {passwordErrors.length === 0 ? (
                            <p>Valid Password</p>
                        ) : (
                            <p>Invalid Password: ({passwordErrors.join(', ')})</p>
                        )}
                    </div>

                    <div>
                        {confirmPasswordValid ? (
                            <p>Passwords Match</p>
                        ) : (
                            <p>Passwords Do Not Match</p>
                        )}
                    </div>

                    <div>
                        {emailErrors.length === 0 ? (
                            <p>Valid Email</p>
                        ) : (
                            <p>Invalid Email: ({emailErrors.join(', ')})</p>
                        )}
                    </div>
                </>
            ) : (
                <div>{message}</div>
            )}
        </div>
    );
}

export default SignupMessage;
