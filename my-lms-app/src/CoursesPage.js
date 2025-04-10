import React, { useEffect, useState, useContext, createContext} from 'react';

import Header from './Header';
import Footer from './Footer';

import CourseCatalog from './CourseCatalog';
import EnrollmentList from './EnrollmentList';

export const enrolledContext = createContext();

function CoursesPage() {
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
                    <CourseCatalog />
                    <EnrollmentList />
                </enrolledContext.Provider>
            </div>
            <Footer />
        </div>
    );
}

export default CoursesPage;