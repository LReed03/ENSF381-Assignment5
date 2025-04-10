import React, { useContext } from 'react';
import { AuthContext } from './LoginForm.js';
import DisplayStatus from './DisplayStatus';

function AuthMessage() {
    const { message, messageType } = useContext(AuthContext);
    return (
        <DisplayStatus type={messageType} message={message} />
    );
}

export default AuthMessage;
