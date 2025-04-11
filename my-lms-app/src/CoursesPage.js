import React, { useEffect, useState, useContext, createContext} from 'react';

import Header from './Header';
import Footer from './Footer';

import CourseCatalog from './CourseCatalog';
import EnrollmentList from './EnrollmentList';

export const enrolledContext = createContext();

function CoursesPage() {

    async function fetchCourses() {
        const backendEndpoint = 'http://127.0.0.1:5000/Courses'
        try {
            const response = await fetch(backendEndpoint, {
                method: 'GET'
            });
            const data = await response.json();
            console.log(JSON.stringify(data))
            return data.results;
        } catch(error) {
            console.error('Error: ', error);
        }
    }
    const courses = fetchCourses();
    const [enrolledCourse, setEnrolledCourses] = useState(() => {
        const stored = localStorage.getItem('enrolledCourses');
        return stored ? JSON.parse(stored) : [];
      });
    useEffect(() => {
        localStorage.setItem('enrolledCourses', JSON.stringify(enrolledCourse));
    }, [enrolledCourse]);

    return (
        <div className="courses-page">
            <Header />
            <div className="content">
                <enrolledContext.Provider value={{enrolledCourse, setEnrolledCourses}}>
                    <CourseCatalog courses={courses}/>
                    <EnrollmentList />
                </enrolledContext.Provider>
            </div>
            <Footer />
        </div>
    );
}

export default CoursesPage;