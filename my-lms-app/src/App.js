import logo from './logo.svg';
import './App.css';
import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Homepage from './Homepage';
import CoursesPage from './CoursesPage';
import Login from './Login';

function App() {
  return (
    <BrowserRouter>
    <Routes>
        <Route path="/" element={<Homepage />}/>
        <Route path="/Courses" element={<CoursesPage />}/>
        <Route path="/Login" element={<Login />}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
