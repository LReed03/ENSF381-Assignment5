import React, { createContext, useContext } from 'react';
import { useState, useEffect} from 'react';
import AuthMessage from './AuthMessage';

import './LoginForm.css';
import { useNavigate } from 'react-router-dom';
import { StudentContext } from './App';

export const AuthContext = createContext();

function LoginForm() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');
    const [messageType, setMessageType] = useState('');
    const { studentId, setStudentId } = useContext(StudentContext);

    const navigate = useNavigate();

    async function loginFetch() {
        const backendEndpoint = 'http://127.0.0.1:5000/login';
        try {
            const response = await fetch(backendEndpoint, {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    username,
                    password,
                }),
            });
    
            const data = await response.json();
            setMessage(data.message);
            setMessageType(response.ok ? "success" : "error");
    
            if (response.ok) {
                setStudentId(data.studentId)
                setTimeout(() => {
                    navigate('/Courses',)
                }, 2000);
            }
        } 
        catch (error) {
            console.error("Login error:", error);
            setMessage("Server error. Please try again later.");
            setMessageType("error");
        }
    }
    

    const handleSubmit = (e) => {
        e.preventDefault();
        loginFetch();
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