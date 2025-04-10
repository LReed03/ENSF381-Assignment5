import React from 'react';
import { useContext } from 'react';
import EnrolledCourse from './EnrolledCourse';
import { enrolledContext } from './CoursesPage';
import './EnrollmentList.css'

function EnrollmentList() {
    const { enrolledCourse } = useContext(enrolledContext);
    const totalCredits = enrolledCourse.length * 3;
    return(
        <div>
            <h2>Enrollment List</h2>
            <div className='EnrollmentList'>
                {enrolledCourse.map((course, index) => (
                <EnrolledCourse name={course.name} course={course} />))}
            </div>
            <p>Total Credit Hours: {totalCredits}</p>
        </div>
    );
}

export default EnrollmentList;