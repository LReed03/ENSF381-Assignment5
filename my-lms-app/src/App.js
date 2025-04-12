import logo from './logo.svg';
import './App.css';
import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Homepage from './Homepage';
import CoursesPage from './CoursesPage';
import Login from './Login';
import { createContext } from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import SignupPage from './SignupPage';
export const StudentContext = createContext();


function App() {

  const getInitialStudentId = () => {
    const stored = sessionStorage.getItem('studentId');
    return stored ? parseInt(stored, 10) : null;
  };



  const [studentId, setStudentId] = useState(getInitialStudentId);

  useEffect(() => {
    if (studentId !== null) {
        sessionStorage.setItem('studentId', studentId);
    } else {
        sessionStorage.removeItem('studentId');
    }
  }, [studentId]);
  return (
    <StudentContext.Provider value={{ studentId, setStudentId }}>
      <BrowserRouter>
        <Routes>
            <Route path="/" element={<Homepage />}/>
            <Route path="/Courses" element={<CoursesPage />}/>
            <Route path="/Login" element={<Login />}/>
            <Route path ="/Signup" element={<SignupPage/>}/>
        </Routes>
      </BrowserRouter>
    </StudentContext.Provider>
  );
}

export default App;
