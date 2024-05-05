import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { db } from "../../firebase";
import { collection, getDocs, query, where } from "firebase/firestore";
import Users from "./Users";

function Dashboard() {
  const [pinCode, setPinCode] = useState("");
  const [filteredStudents, setFilteredStudents] = useState([]);
  const userData = JSON.parse(localStorage.getItem("userData"));

  const handlePinCodeChange = (event) => {
    setPinCode(event.target.value);
    localStorage.setItem("pincode", event.target.value);
  };

  const handleSubmit = () => {
    const pin = localStorage.getItem("pincode");
    if (pin === "") {
      console.log(pin);
      return;
    }

    if (userData) {
      console.log(userData);
      const uType = userData.userType === "student" ? "teacher" : "student";
      console.log(uType);
      const q = query(
        collection(db, "users"),
        where("userType", "==", uType),
        where("pincode", "==", pin)
      );

      getDocs(q).then((data) => {
        const std = data.docs.map((doc) => ({
          ...doc.data(),
          docId: doc.id,
        }));
        setFilteredStudents(std);
      });
    }
  };
  console.log(filteredStudents);

  useEffect(() => {
    handleSubmit();
  }, []);

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
        <Users data={student} />
      ))}
    </div>
  );
}

export default Dashboard;
