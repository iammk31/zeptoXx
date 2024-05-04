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
      {filteredStudents.map((student) => (
        <Users
          data={student}
        />
      ))}
    </div>
  );
}

export default Dashboard;
