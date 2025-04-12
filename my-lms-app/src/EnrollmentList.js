import React, { useEffect, useState } from 'react';
import { useContext } from 'react';
import EnrolledCourse from './EnrolledCourse';
import './EnrollmentList.css'
import {enrolledCourseContext} from './CoursesPage';

function EnrollmentList(props) {
    const {setEnrolledCourses, enrolledCourses} = useContext(enrolledCourseContext)
    const studentId = props.studentId;
    async function fetchCourses() {
        if (studentId === null || 0){
            return <p>No enrolled courses yet.</p>;
        }
        try {
            const response = await fetch(`http://127.0.0.1:5000/student_courses/${studentId}` , {
                method: 'GET'
            });
            const data = await response.json();
            setEnrolledCourses(data.results);
        } catch(error) {
            console.error('Error: ', error);
        } 
    } 
    useEffect(() => {fetchCourses();},[])
    if (!enrolledCourses || enrolledCourses.length === 0) {
        return <p>No enrolled courses yet.</p>;
      }
      
    const totalCredits = enrolledCourses.length * 3;
    return(
        <div>
            <h2>Enrollment List</h2>
            <div className='EnrollmentList'>
                {enrolledCourses.map((course) => (
                <EnrolledCourse id={course.id} studentId={studentId} name={course.name} course={course} />))}
            </div>
            <p>Total Credit Hours: {totalCredits}</p>
        </div>
    );
}

export default EnrollmentList;