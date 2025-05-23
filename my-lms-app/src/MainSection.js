import {React, useEffect, useState} from 'react';

import './MainSection.css';

function MainSection() {
    const [testimonial1, setTestimonial1] = useState(null);
    const [testimonial2, setTestimonial2] = useState(null);
    async function getTestimonial(){
        try{
            const response = await fetch('http://127.0.0.1:5000/testimonial', {
                method: 'GET'
            });
            const data = await response.json();
            setTestimonial1(data.testimonial1);
            setTestimonial2(data.testimonial2);
        }
        catch(error){
            console.error('Error: ', error);
        }
    }

    useEffect(() => {getTestimonial();},[]);

    if (!testimonial1 || !testimonial2) return <p>Loading testimonials...</p>;


    const course1 = {
        id: 1,
        name: "Web Development",
        instructor: "Dr. John Smith",
        description: "Master HTML, CSS, and JavaScript.",
        duration: "8 weeks",
        image: "images/course1.jpg"
    }
    const course2 = {
        id: 2,
        name: "Object Oriented Development",
        instructor: "Dr. John Jones",
        description: "Learn the principals of object oriented development.",
        duration: "8 weeks",
        image: "images/course1.jpg"
    }
    const course3 = {
        id: 3,
        name: "Computer Organization",
        instructor: "Dr. James Howlett",
        description: "Learn the basics of RISC V architecture and RISC V assembly.",
        duration: "8 weeks",
        image: "images/course1.jpg"
    }

    

    var stars1 = "★".repeat(testimonial1.rating) + "☆".repeat(5 - testimonial1.rating);
    var stars2 = "★".repeat(testimonial2.rating) + "☆".repeat(5 - testimonial2.rating);
    

    return (
        <div id="mainSection">
            <h1>About LMS</h1>
            <p>The Learning Management System (LMS) helps students and instructors manage courses, quizzes, and track performance efficiently.</p>
            <h2>Key Features:</h2>
            <div>
                <p>- Enroll in courses</p>
                <p>- Attempt quizzes</p>
                <p>- View leaderboards</p>
            </div>
            <h2>Featured Courses:</h2>
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
            <h2>Testimonials:</h2>
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