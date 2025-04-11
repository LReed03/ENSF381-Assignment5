import React, { createContext } from 'react';
import { useState, useEffect} from 'react';
import AuthMessage from './AuthMessage';

import './LoginForm.css';

export const AuthContext = createContext();

function LoginForm() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [usernames, setUsernames] = useState([]);
    const [passwords, setPasswords] = useState([]);
    const [message, setMessage] = useState('');
    const [messageType, setMessageType] = useState('');

    async function fetchData() {
        try {
            const response = await fetch('https://jsonplaceholder.typicode.com/users');
            const users = await response.json();

            const fetchedUsernames = [];
            const fetchedPasswords = [];

            users.forEach(user => {
                fetchedUsernames.push(user.username);
                fetchedPasswords.push(user.email); 
            });

            setUsernames(fetchedUsernames);
            setPasswords(fetchedPasswords);
        } catch (error) {
            console.error('Error fetching users:', error);
        }
    }

    useEffect(() => {
        fetchData();
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!username || !password) {
            setMessage('Username and password cannot be empty.');
            setMessageType('error');
            return;
        }

        if (password.length < 8) {
            setMessage('Password must be at least 8 characters.');
            setMessageType('error');
            return;
        }

        const index = usernames.indexOf(username);
        if (index !== -1 && passwords[index] === password) {
            setMessage('Login successful!');
            setMessageType('success');
            setTimeout(() => {
                window.location.href = '/Courses';
            }, 2000);
        } else {
            setMessage('Invalid username or password.');
            setMessageType('failure');
        }
    };

    return (
        <AuthContext.Provider value={{ message, setMessage, messageType, setMessageType }}>
            <div>
                <form onSubmit={handleSubmit} className='login'>
                    <div className='username-container'>
                        <label for='username'>Username:</label>
                        <input type='text' id='username' value={username} onChange={(e) => setUsername(e.target.value)} ></input>
                    </div>
                    <div className='password-container'>
                        <label for='password'>Password:</label>
                        <input type='password' id='password' value={password} onChange={(e) => setPassword(e.target.value)} ></input>
                    </div>
                    <div className='login-button-container'>
                        <button type='submit' className='login-button'>Submit</button>
                    </div>
                    <div className='forgot-password-container'>
                        <br></br>
                        <a href='' id='forgot-password'>Forgot Password</a>
                        <br></br>
                        <a href='/Signup' id='signup'>Create Account</a>
                    </div>
                </form>
                <AuthMessage/>
            </div>
        </AuthContext.Provider>
    );
}

export default LoginForm;