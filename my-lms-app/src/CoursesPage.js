import React, { useEffect, useState, useContext, createContext} from 'react';

import Header from './Header';
import Footer from './Footer';

import CourseCatalog from './CourseCatalog';
import EnrollmentList from './EnrollmentList';
import { useLocation } from 'react-router-dom';

function CoursesPage() {
    const location = useLocation();
    const studentId = location.state.studentId
    const [courses, setCourses] = useState([]);
    async function fetchCourses() {
        const backendEndpoint = 'http://127.0.0.1:5000/Courses'
        try {
            const response = await fetch(backendEndpoint, {
                method: 'GET'
            });
            const data = await response.json();
            setCourses(data.results);
        } catch(error) {
            console.error('Error: ', error);
        } 
    } 
    useEffect(() => {fetchCourses();},[]);
    return (
        <div className="courses-page">
            <Header />
            <div className="content">
                <CourseCatalog courses={courses} studentId={studentId}/>
                <EnrollmentList studentId={studentId} />
            </div>
            <Footer />
        </div>
    );
}

export default CoursesPage;