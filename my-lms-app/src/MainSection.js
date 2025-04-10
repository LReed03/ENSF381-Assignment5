import {React, useEffect, useState} from 'react';
import Courses from './data/courses';
import Testimonials from './data/testimonials';

import './MainSection.css';

function MainSection() {
    const course1 = Courses[4]; 
    const course2 = Courses[2];
    const course3 = Courses[5]; 
    const [testimonial1, setTestimonial1] = useState(Testimonials[0]);
    const [testimonial2, setTestimonial2] = useState(Testimonials[0]);
    useEffect(() => {
        let num1 = Math.floor(Math.random() * Testimonials.length)
        const T1 = Testimonials[num1];
        let num2 = Math.floor(Math.random() * Testimonials.length)
        while (num1 === num2) {
            num2 = Math.floor(Math.random() * Testimonials.length)
        }
        const T2 = Testimonials[num2];
        setTestimonial1(T1);
        setTestimonial2(T2);
    }, []);

    var stars1 = "★".repeat(testimonial1.rating) + "☆".repeat(5 - testimonial1.rating);
    var stars2 = "★".repeat(testimonial2.rating) + "☆".repeat(5 - testimonial2.rating);

    return (
        <div id="mainSection">
            <h2>About LMS</h2>
            <p>The Learning Management System (LMS) helps students and instructors manage courses, quizzes, and track performance efficiently.</p>
            <h3>Key Features:</h3>
            <div>
                <p>- Enroll in courses</p>
                <p>- Attempt quizzes</p>
                <p>- View leaderboards</p>
            </div>
            <h3>Featured Courses:</h3>
            <div>
                <div>
                    <h3>{course1.name}</h3>
                    <p>Instructor: {course1.instructor}</p>
                    <p>Duration: {course1.duration}</p>
                    <p>Description: {course1.description}</p>
                </div>
                <div>
                    <h3>{course2.name}</h3>
                    <p>Instructor: {course2.instructor}</p>
                    <p>Duration: {course2.duration}</p>
                    <p>Description: {course2.description}</p>
                </div>
                <div>
                    <h3>{course3.name}</h3>
                    <p>Instructor: {course3.instructor}</p>
                    <p>Duration: {course3.duration}</p>
                    <p>Description: {course3.description}</p>
                </div>
            </div>
            <h3>Testimonials:</h3>
            <div>
                    <div>
                        <h3>Student Name: {testimonial1.studentName}</h3>
                        <h3>Course Name: {testimonial1.courseName}</h3>
                        <p>Review: {testimonial1.review}</p>
                        <p>Rating: {stars1}</p>
                    </div>
                    <div>
                        <h3>Student Name: {testimonial2.studentName}</h3>
                        <h3>Course Name: {testimonial2.courseName}</h3>
                        <p>Review: {testimonial2.review}</p>
                        <p>Rating: {stars2}</p>
                    </div>
                </div>
        </div>
    );
}

export default MainSection;