import {React, useState, useContext} from 'react';
import courselogo from './images/course2.jpg';
import { enrolledContext } from './CoursesPage';
import './CourseItem.css'
import { useLocation } from 'react-router-dom';

function CourseItem(props) {

    const [showDescription, setShowDescription] = useState(false);

    function hover(){
        setShowDescription(true);
    }

    function outHover(){
        setShowDescription(false);
    }

    function addClass() {
      console.log(props.studentId);
      console.log("hello");
      fetch(`http://127.0.0.1:5000/enroll/${props.studentId}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          id: props.id,
          name: props.name,
          instructor: props.instructor,
          description: props.instructor,
          duration: props.duration,
          image: props.image
        })
      });
      window.location.reload();
    }
      

    return (
        <div className="CourseItem" onMouseEnter={hover} onMouseLeave={outHover}>
            <img src={courselogo} alt='Course Image'/>
            <p>Course Name: {props.name}</p>
            <p>Instructor: {props.instructor}</p>
            {showDescription && <p>Description: {props.description}</p>}
            <button onClick={addClass}>Enroll Now</button>
        </div>
    );
}

export default CourseItem;