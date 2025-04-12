import {React, useState, useContext, useEffect} from 'react';
import courselogo from './images/course2.jpg';
import './CourseItem.css'
import {enrolledCourseContext} from './CoursesPage';

function CourseItem(props) {

    const [showDescription, setShowDescription] = useState(false);
    const {setEnrolledCourses, enrolledCourses} = useContext(enrolledCourseContext)

    function hover(){
        setShowDescription(true);
    }

    function outHover(){
        setShowDescription(false);
    }

    async function addClass() {
      console.log(props.studentId);
      const response = await fetch(`http://127.0.0.1:5000/enroll/${props.studentId}`, {
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
      const data = await response.json();
      if (data.result === "You're already enrolled in this course!" || data.result === "Student not found"){
        alert(data.result)
      }
      else{
        console.log(data.result);
        setEnrolledCourses(data.enrolled_courses);

      }
    }
  useEffect(() =>{},[enrolledCourses])

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