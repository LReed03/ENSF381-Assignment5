import React from 'react';
import Logo from './images/logo.jpg';

import './Header.css';

function Header() {

    return (
        <div>
            <div className='header'>
                <img src={Logo} alt="Logo" />
                <h1>LMS - Learning Management System</h1>
            </div>
                <nav>
                    <a href="/">Homepage</a> 
                    <a href="/Courses">Courses</a> 
                    <a href="/Login">Login</a>
                </nav>
        </div>
    );
}

export default Header;