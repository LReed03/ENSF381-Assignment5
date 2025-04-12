import React from 'react';
import courselogo from './images/course1.jpg';
import './EnrolledCourse.css';
import {enrolledCourseContext} from './CoursesPage';
import { useContext } from 'react';

function EnrolledCourse(props) {
  const {setEnrolledCourses, enrolledCourses} = useContext(enrolledCourseContext)
  
  async function handleDrop() {
    try {
      
      const response = await fetch(`http://127.0.0.1:5000/drop/${props.studentId}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ id: props.id })
      });
  
      const data = await response.json();
      if (data.result === "Course not found in enrolled courses!" || data.result === "Student not found"){
        alert(data.result)
      }
      else{
        console.log(data.result);
        setEnrolledCourses(data.enrolled_courses);
      }
    } 
    catch (error) {
      console.error('Error dropping course:', error);
    }
  }
  

    return (
        <div className='EnrolledCourse'>
            <img src={courselogo} alt="Course Logo"/>
            <p>Course Name: {props.name}</p>
            <p>Credit Hours: 3</p>
            <button onClick={()=> handleDrop()}>Drop Course</button>
        </div>
    );
}

export default EnrolledCourse;