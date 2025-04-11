import {React, useState, useContext} from 'react';
import courselogo from './images/course2.jpg';
import { enrolledContext } from './CoursesPage';
import './CourseItem.css'

function CourseItem(props) {
    const { enrolledCourse, setEnrolledCourses } = useContext(enrolledContext);
    const [showDescription, setShowDescription] = useState(false);

    function hover(){
        setShowDescription(true);
    }

    function outHover(){
        setShowDescription(false);
    }

    function addClass() {
        let duplicate = false;
      
        for (let i = 0; i < enrolledCourse.length; i++) {
          if (enrolledCourse[i].id === props.id) {
            duplicate = true;
            break;
          }
        }
      
        if (!duplicate) {
          setEnrolledCourses([...enrolledCourse, props]);
        } else {
          alert("You're already enrolled in this course!");
        }
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