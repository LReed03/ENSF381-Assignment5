import React, { useState } from 'react';

import CourseItem from './CourseItem';

import './CourseCatalog.css'

function CourseCatalog(props) {
    const [courses, setCourses] = useState(props);
    const courseItem = props.courses.map((course) => <CourseItem studentId={props.studentId} id={course.id} name={course.name} instructor={course.instructor} description={course.description} duration={course.duration} image={course.image}/>);
    return (
        <div>
            <h2>Course Catalog</h2>
            <div className="CourseCatalog">
                {courseItem}
            </div>
        </div>
    );
}

export default CourseCatalog;