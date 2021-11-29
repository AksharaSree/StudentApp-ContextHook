import React, { useState, useContext, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { StudentContext } from "../App";

function EditStudent() {
  
  let context = useContext(StudentContext);
  let [name, setName] = useState("");
  let [degree, setDegree] = useState("");
  let [dept, setDept] = useState("");
  let [email, setEmail] = useState("");
  let [mobile, setMobile] = useState("");

  let navigate = useNavigate();
  const params = useParams();
  let studentID = params.id;

  //to get the data of specific ID 
  useEffect(() => {   

    let getData = () => {

      if (studentID) {
        let data = context.students.filter(
          (student) => student.id === parseInt(studentID)
        );
        console.log(data);
  
        setName(data[0].name);
        setEmail(data[0].email);
        setMobile(data[0].mobile);
        setDegree(data[0].degree);
        setDept(data[0].dept);
      }
    }; 

      getData();   
  }, [context.students,studentID]);

 

  let saveHandler = () => {
    let index = context.students.findIndex(
      (student) => student.id === parseInt(params.id)
    );

    context.students[index].name = name;
    context.students[index].degree = degree;
    context.students[index].dept = dept;
    context.students[index].mobile = mobile;
    context.students[index].email = email;
    context.setStudents([...context.students]);
    navigate("/all-students");
  };

  return (
    <div>
      <h1>Edit Student</h1>
      <div>
        <div className="form-group">
          <label htmlFor="exampleInputPassword1">Name</label>
          <input
            type="text"
            value={name}
            className="form-control"
            onChange={(e) => setName(e.target.value)}
            placeholder="Name"
          />
        </div>
        <div className="form-group">
          <label htmlFor="exampleInputEmail1">Email address</label>
          <input
            type="email"
            value={email}
            className="form-control"
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter email"
          />
          <small id="emailHelp" className="form-text text-muted">
            We'll never share your email with anyone else.
          </small>
        </div>
        <div className="form-group">
          <label htmlFor="exampleInputPassword1">Mobile</label>
          <input
            type="text"
            value={mobile}
            className="form-control"
            onChange={(e) => setMobile(e.target.value)}
            placeholder="Mobile"
          />
        </div>
        <div className="form-group">
          <label htmlFor="exampleInputPassword1">Degree</label>
          <input
            type="text"
            value={degree}
            className="form-control"
            onChange={(e) => setDegree(e.target.value)}
            placeholder="Degree"
          />
        </div>
        <div className="form-group">
          <label htmlFor="exampleInputPassword1">Department</label>
          <input
            type="text"
            value={dept}
            className="form-control"
            onChange={(e) => setDept(e.target.value)}
            placeholder="Department"
          />
        </div>
        <button className="btn btn-primary" onClick={saveHandler}>
          Submit
        </button>
      </div>
    </div>
  );
}

export default EditStudent;
