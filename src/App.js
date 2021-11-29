import "./App.css";
import React, {useState} from "react";
import {BrowserRouter as Router, Route , Routes} from 'react-router-dom';

import SideBar from "./components/Sidebar";
import Dashboard from "./components/Dashboard";
import AllStudents from "./components/AllStudents";
import StudentForm from "./components/StudentForm";
import EditStudent from "./components/EditStudent";


export const StudentContext = React.createContext();
function App() {
  

  let [students, setStudents] =  useState([{
    id: 1,
    name: "Karthik",
    degree:"B.E",
    dept:"Computer Science",
    mobile:"9478239942",
    email:"abc@gmail.com"
   
   },
   {
    id: 2,
       name: "Akshara",
       degree:"B.Tech",
       dept:"Information Technology",
       mobile:"9478239942",
       email:"abc2@gmail.com"
      
      },
      {
        id: 3,
       name: "Raji",
       degree:"B.E",
       dept:"ECE",
       mobile:"9478239942",
       email:"abc1@gmail.com"
      
      }
   
   ]);

  
  return <>
      
      <Router>
      <StudentContext.Provider value={{students, setStudents}}>
        <div style={{ display: "grid", gridTemplateColumns: "15% 80%" }}>
          <div>
            <SideBar />
          </div>
          <div>
            <Routes>
              <Route path="/dashboard" element={<Dashboard />} />              
              <Route path="/all-students" element={<AllStudents />} />
              <Route path="/student-form" element={<StudentForm />} />
              <Route path = '/edit-student/:id' element={<EditStudent/>}/>
              <Route path="/" element={<Dashboard />} />
            </Routes>
          </div>
        </div>
        </StudentContext.Provider>
      </Router>
      
  </>
}

export default App;
