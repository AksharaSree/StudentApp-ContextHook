import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { StudentContext } from "../App";

function StudentForm() {

  let context = useContext(StudentContext);
  let navigate = useNavigate();

  let [name, setName] = useState("");
  let [degree, setDegree] = useState("");
  let [dept, setDept] = useState("");
  let [email, setEmail] = useState("");
  let [mobile, setMobile] = useState("");

  let saveHandler = () => {
    
    let id = Math.max(...context.students.map((student) => student.id)) + 1;
    context.students.push({ id, name, degree, dept, mobile, email });
    context.setStudents([...context.students]);
    navigate("/all-students");
  };

  return (
    <div>
      <h3>Student Form</h3>
      <form onSubmit={saveHandler}>
        <div className="form-group">
          <label htmlFor="studentName">Student Name</label>
          <input
            type="text"
            id="txtStudentName"
            onChange={(e) => setName(e.target.value)}
            className="form-control"
            placeholder="Enter name"
          />
        </div>

        <div className="form-group">
          <label htmlFor="Degree">Degree</label>
          <input
            type="text"
            id="txtDegree"
            onChange={(e) => setDegree(e.target.value)}
            className="form-control"
            placeholder="Enter Degree"
          />
        </div>

        <div className="form-group">
          <label htmlFor="Department">Department</label>
          <input
            type="text"
            id="txtDepartment"
            onChange={(e) => setDept(e.target.value)}
            className="form-control"
            placeholder="Enter Department"
          />
        </div>

        <div className="form-group">
          <label htmlFor="Mobile">Mobile</label>
          <input
            type="text"
            id="txtMobile"
            onChange={(e) => setMobile(e.target.value)}
            className="form-control"
            placeholder="Enter Mobile"
          />
        </div>

        <div className="form-group">
          <label htmlFor="exampleInputEmail1">Email address</label>
          <input
            type="email"
            id="txtEmail"
            onChange={(e) => setEmail(e.target.value)}
            className="form-control"
            aria-describedby="emailHelp"
            placeholder="Enter email"
          />
          <small id="emailHelp" className="form-text text-muted">
            We'll never share your email with anyone else.
          </small>
        </div>
        <div className="form-group">
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}

export default StudentForm;
