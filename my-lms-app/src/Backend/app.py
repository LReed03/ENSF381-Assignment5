from flask import Flask, jsonify, request
from flask_cors import CORS
import json

students = [{
    "id": 1,
    "username": "JohnDoe",
    "password": "Password",
    "email": "johndoe@mail.com",
    "enrolled_courses": [
        {
            "id": 10,
            "name": "Digital Circuits",
            "instructor": "Dr. John Henry",
            "description": "Learn the basics of digital circuits.",
            "duration": "8 weeks",
            "image": "images/course1.jpg"
        },
        {
            "id": 6,
            "name": "Differential Equations",
            "instructor": "Dr. James Barnes",
            "description": "Master differential equations and their uses.",
            "duration": "8 weeks",
            "image": "images/course1.jpg"
        },
        {
            "id": 4,
            "name": "Discrete Mathematics",
            "instructor": "Dr. John Stewart",
            "description": "Learn to prove mathematical statemtents and to count.",
            "duration": "8 weeks",
            "image": "images/course1.jpg"
        }
    ] 
}]

app = Flask(__name__)
CORS(app)

@app.route('/enroll/<student_id>')
def enroll(student_id):
    data = request.get_json()
    for e in students:
        if e['id'] == student_id:
            if data not in e['enrolled_courses']:
                return jsonify({"result": "You're not enrolled in this course!"})
            e["enrolled_courses"].remove(data)
            return jsonify({"results": "Successfully dropped class."})
            

@app.route('/drop/<student_id>')
def drop(student_id):
    data = request.get_json()
    for e in students:
        if e['id'] == student_id:
            if data in e['enrolled_courses']:
                return jsonify({"result": "You're already enrolled in this course!"})
            e["enrolled_courses"].append(data)
            return jsonify({"result": "Enrollement successful!"})
    
@app.route('/Courses', methods= ['GET'])
def courses():
    with open('data/courses.json', 'r') as f:
        data = {"results": json.load(f)}
        return jsonify(data)
    
    
@app.route('/login', methods=['POST'])
def login():
    data = request.get_json()
    username = data.get("username")
    password = data.get("password")

    for student in students.values():
        if student["username"] == username:
            if student["password"] == password:
                return jsonify({"message": "Login successful!"}), 200
            else:
                return jsonify({"message": "Incorrect password."}), 401

    return jsonify({"message": "Username not found."}), 404


@app.route('/register', methods=['POST'])
def register():
    data = request.get_json()
    username = data.get('username')
    password = data.get('password')
    email = data.get('email')

    if not all([username, password, email]):
        return jsonify({"message": "Missing required fields."}), 400

    for student in students.values():
        if student["username"] == username:
            return jsonify({"message": "Username is already taken."}), 409

    new_id = str(len(students) + 1)

    students[new_id] = {
        "username": username,
        "password": password,
        "email": email,
        "enrolled_courses": []
    }

    return jsonify({"message": "User registered successfully."}), 200


    

    

if __name__ == '__main__':
    app.run()