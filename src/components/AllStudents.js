import React, { useContext } from "react";
import {StudentContext} from '../App';
import { useNavigate } from "react-router-dom";    

function AllStudents() {
  let navigate = useNavigate();  
  let context = useContext(StudentContext);

  let deleteHandler = (id)=>{

      let index = context.students.findIndex(student=>student.id === parseInt(id));
      context.students.splice(index,1);
      context.setStudents([...context.students]);
  };

  return (
    <table className="table table-striped">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Name</th>
          <th scope="col">Degree</th>
          <th scope="col">Department</th>
          <th scope="col">Phone</th>
          <th scope="col">Email</th>
          <th scope="col">Actions</th>
        </tr>
      </thead>
      <tbody>


        {
        
        context.students.length > 0 ? 
        
        context.students.map((element, i) => {
          return (
            <tr key={i}>
              <th scope="row">{element.id}</th>
              <td>{element.name}</td>
              <td>{element.degree}</td>
              <td>{element.dept}</td>             
              <td>{element.mobile}</td>
              <td>{element.email}</td>
              <td>
                {" "}
                <button
                  className="btn btn-primary"
                  onClick={() => {
                    navigate("/edit-student/" + element.id);
                  }}
                >
                  Edit
                </button>{" "}
                &nbsp; &nbsp;&nbsp;{" "}
                <button type="button"
                  className="btn btn-danger"
                  onClick={() => deleteHandler(element.id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          );
        }) 
        
        :  
          <tr>
            <th colSpan="7" scope="row" style={{textAlign: "center"}}> No records available</th>           
          </tr>
        
      
      }
      </tbody>
    </table>
  );
}

export default AllStudents;
