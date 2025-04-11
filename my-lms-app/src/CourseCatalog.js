import React from 'react';

import CourseItem from './CourseItem';

import './CourseCatalog.css'

function CourseCatalog(props) {
    const courseItem = props.courses.map((course) => <CourseItem id={course.id} name={course.name} instructor={course.instructor} description={course.description}/>);
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