import React from 'react';
import courselogo from './images/course1.jpg';
import { useContext } from 'react';
import { enrolledContext } from './CoursesPage';
import './EnrolledCourse.css';

function EnrolledCourse(props) {
    const { enrolledCourse, setEnrolledCourses } = useContext(enrolledContext);

    function handleDrop() {
        const copy = [...enrolledCourse]; 
      
        for (let i = 0; i < copy.length; i++) {
          if (copy[i].name === props.course.name) {
            copy.splice(i, 1); 
            break; 
          }
        }
      
        setEnrolledCourses(copy);
      }

    return (
        <div className='EnrolledCourse'>
            <img src={courselogo} alt="Course Logo"/>
            <p>Course Name: {props.name}</p>
            <p>Credit Hours: 3</p>
            <button onClick={handleDrop}>Drop Course</button>
        </div>
    );
}

export default EnrolledCourse;