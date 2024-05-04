import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { db } from "../../firebase";
import { collection, getDocs, query, where } from "firebase/firestore";
import Users from "./Users";

function Dashboard(props) {
  console.log(props);
  const [pinCode, setPinCode] = useState("");
  const [filteredStudents, setFilteredStudents] = useState([]);

  const handlePinCodeChange = (event) => {
    setPinCode(event.target.value);
  };

  const handleSubmit = () => {
    console.log(props.userData)
    // fetchData();
    if (pinCode === "") {
      console.log(pinCode);
      return;
    }

    const uType = props.userData.userType === "student" ? "teacher" : "student";
    console.log(uType);
    const q = query(
      collection(db, "users"),
      where("userType", "==", uType),
      where("pincode", "==", pinCode)
    );
    getDocs(q).then((data) => {
      setFilteredStudents(data.docs.map((doc) => doc.data()));
      console.log("filtered student set");
    });
  };
  console.log(filteredStudents);

  return (
    // <div>
    //   {currentPath === "users/teacher/data" ? <Teachers /> : <Students />}
    // </div>
    <div className="container container-fluid">
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
          data={student}
        />
      ))}
    </div>
  );
}

export default Dashboard;
