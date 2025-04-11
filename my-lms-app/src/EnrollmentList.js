import React, { useState } from 'react';
import { useContext } from 'react';
import EnrolledCourse from './EnrolledCourse';
import { enrolledContext } from './CoursesPage';
import './EnrollmentList.css'

function EnrollmentList() {
    const [enrolledCourses, setEnrolledCourses] = useState([])
    async function fetchCourses() {
        const backendEndpoint = 'http://127.0.0.1:5000/student_courses/'
        try {
            const response = await fetch(backendEndpoint, {
                method: 'GET'
            });
            const data = await response.json();
            setEnrollesCourses(data.results);
        } catch(error) {
            console.error('Error: ', error);
        } 
    } 
    const totalCredits = enrolledCourse.length * 3;
    return(
        <div>
            <h2>Enrollment List</h2>
            <div className='EnrollmentList'>
                {enrolledCourses.map((course, index) => (
                <EnrolledCourse name={course.name} course={course} />))}
            </div>
            <p>Total Credit Hours: {totalCredits}</p>
        </div>
    );
}

export default EnrollmentList;