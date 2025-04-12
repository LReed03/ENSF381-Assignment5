import React from 'react';
import courselogo from './images/course1.jpg';
import './EnrolledCourse.css';

function EnrolledCourse(props) {
    function handleDrop() {
      fetch(`http://127.0.0.1:5000/enroll/${props.studentId}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          id: props.id,
        })
      })
      .then(response => response.json())
      .then (data => window.location.reload()) 
    }

    return (
        <div className='EnrolledCourse'>
            <img src={courselogo} alt="Course Logo"/>
            <p>Course Name: {props.name}</p>
            <p>Credit Hours: 3</p>
            <button onClick={() => handleDrop()}>Drop Course</button>
        </div>
    );
}

export default EnrolledCourse;