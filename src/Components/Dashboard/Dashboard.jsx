import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { db } from "../../firebase";
import { collection, getDocs } from "firebase/firestore";
import Users from './Users'

function Dashboard(props) {
  console.log(props)
  const currentPath = props.collectionPath;
  console.log(currentPath);
  console.log('9')
  const [pinCode, setPinCode] = useState("");
  const [filteredStudents, setFilteredStudents] = useState([]);

  const handlePinCodeChange = (event) => {
    setPinCode(event.target.value);
  };

  const handleSubmit = () => {
    // fetchData();
    if(pinCode===''){
      console.log(pinCode)
      return
    }
    console.log("handle submit called");
    console.log(currentPath);
    const path = currentPath.includes("teacher")
      ? "users/student/data"
      : "users/teacher/data";
    console.log("path is set");
    getDocs(collection(db, path)).then((data) => {
      console.log(path);
      console.log("get docs called");
      // data.docs;
      // setStudents(data.docs.map((doc) => doc.data()));
      console.log("students set");
      
      setFilteredStudents(
        data.docs
          .map((doc) => doc.data())
          .filter((student) => student.pincode.includes(pinCode))
      );
      console.log("filtered studetn set");
    });
    // setFilteredStudents(
    //   students.filter((student) => student.pincode.includes(pinCode))
    // );
  };
  console.log("component re-rendered");
  console.log(filteredStudents);

  return (
    // <div>
    //   {currentPath === "users/teacher/data" ? <Teachers /> : <Students />}
    // </div>
    <div>
      <input
        type="text"
        placeholder="Enter Pin Code"
        value={pinCode}
        onChange={handlePinCodeChange}
      />
      <button className="btn btn-md btn-primary" onClick={handleSubmit}>
        Submit
      </button>

      {/* {filteredStudents.map((student) => (
        <div className="card" key={student.id}>
          <div className="card-header">
            <h2>{currentPath.includes("teacher") ? "Student" : "Teacher"}</h2>
          </div>
          <div className="card-body">
            <h5 className="card-title">{student.name}</h5>
            <p className="card-text">{student.address}</p>
            <button className="btn btn-primary">
            <Link to="#" className="btn btn-primary">
              Show Interest
            </Link>
            </button>
          </div>
        </div>
      ))} */}
      {filteredStudents.map((student) => (
        <Users
          currentUser={student}
          currentPath={currentPath}
          currentUserEmail={props.currentUserEmail}
        />
      ))}
    </div>
  );
}

export default Dashboard;