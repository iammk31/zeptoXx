import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { db } from "../firebase";
import { collection, setDoc, doc } from "firebase/firestore";
import { Link } from "react-router-dom";
import Input from "./UI/Input";


function UserType(props) {
  const [formData, setFormData] = useState({});
  // const [path, setPath] = useState(null);
  
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(formData);
    try {
      const userEmail = props.email;
      const docRef = await setDoc(
        doc(collection(db, "users"), userEmail),
        formData
      );
      console.log("Document written with ID: ", userEmail);
      localStorage.setItem("userEmail", userEmail);
      localStorage.setItem("userData",JSON.stringify({...formData}));
      navigate("/login");
    } catch (error) {
      // handle the error
      console.error("Error adding document: ", error);
    }
  };

  return (
    <div className="container container-fluid d-flex flex-column justify-content-center h-100">
    <div className="column">
      <h1 className="text-light">You are a?</h1>
      <button
        className={`btn btn-md btn-outline-info text-light ${formData.userType === "teacher" ? "btn-info text-dark btn-outline-none" : ""}`}
        onClick={() => {
          // setPath("users/teacher/data");
          setFormData({ ...formData, userType: "teacher" });
        }}
      >
        Teacher
      </button>
      <button
        className={`btn btn-md btn-outline-secondary text-light ${formData.userType === "student" ? "btn-secondary text-dark btn-outline-none" : ""}`}
        onClick={() => {
          // setPath("users/student/data");
          setFormData({ ...formData, userType: "student" });
        }}
      >
        Student
      </button>
      </div>
      <div>
        <form onSubmit={handleSubmit} className="form-group text-light" style={{width:"80%"}}>
          <div className="form-row">
            <div className="form-group">
              <Input
                name="Name"
                id="inputName"
                type="text"
                placeholder="enter your full name"
                value={formData.name}
                onChange={(e) => {
                  setFormData({ ...formData, name: e.target.value });
                }}
              />
            </div>
            <div className="form-group">
              <Input
                name="Qualification"
                id="inputQual"
                value={formData.qual}
                type="text"
                placeholder="enter your education qualification"
                onChange={(e) =>
                  setFormData({ ...formData, qual: e.target.value })
                }
              />
            </div>
          </div>
          <div className="form-col">
            
            <div className="form-group">
              <Input
                name="Address"
                id="inputAddress"
                value={formData.address}
                type="text"
                placeholder="enter your address"
                onChange={(e) =>
                  setFormData({ ...formData, address: e.target.value })
                }
              />
            </div>
            <div className="form-group">
                <div className="form-group">
              <select
                name="Subject"
                id="inputSubject"
                value={formData.subject}
                onChange={(e) =>
                  setFormData({ ...formData, subject: e.target.value })
                }
                className="form-control"
              >
                <option value="">Choose Subject</option>
                <option value="English">English</option>
                <option value="Hindi">Hindi</option>
                <option value="Mathematics">Mathematics</option>
                <option value="Science">Science</option>
                <option value="SST">SST</option>
                <option value="AllSubjects">All Subjects</option>
              </select>
              </div>
            </div>
            <div className="form-group">
              <Input
                name="PhoneNumber"
                id="inputPhone"
                value={formData.phone}
                type="text"
                placeholder="enter 10 digit phone number"
                onChange={(e) =>
                  setFormData({ ...formData, phone: e.target.value })
                }
              />
            </div>
            <div className="form-group">
              <Input
                name="Pincode"
                id="inputPincode"
                value={formData.pincode}
                type="text"
                placeholder="enter 6 digit pincode"
                onChange={(e) =>
                  setFormData({ ...formData, pincode: e.target.value })
                }
              />
            </div>
          </div>
          <div className="form-row">
            <div className="form-group">
              <Input
                name="City"
                id="inputCity"
                value={formData.city}
                type="text"
                placeholder="enter city/district you belong"
                onChange={(e) =>
                  setFormData({ ...formData, city: e.target.value })
                }
              />
            </div>
            <div className="form-group">
              <Input
                name="State"
                id="inputState"
                value={formData.state}
                type="text"
                placeholder="enter your current state"
                onChange={(e) =>
                  setFormData({ ...formData, state: e.target.value })
                }
              />
            </div>
          </div>
          <div className="form-group">
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                id="gridCheck"
              />
              <label className="form-check-label" for="gridCheck">
                <Link to="/tnc">I agree</Link>
              </label>
            </div>
          </div>
          <button
            type="submit"
            className="btn btn-primary "
            onClick={handleSubmit}
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}
export default UserType;
