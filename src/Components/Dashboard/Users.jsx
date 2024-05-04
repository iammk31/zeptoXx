import React, { useState } from "react";
import emailjs from "@emailjs/browser";

const Users = (props) => {
  const userType = props.data.userType;
  const currentUserEmail = localStorage.getItem("userEmail");
  const [showInterestButton, setShowInterestButton] = useState(true);

  const emailSubmit = (user) => {
    const serviceId = "service_oa8btcp";
    const templateId = "template_2ebuq8v";
    try {
      emailjs.send(serviceId, templateId, {
        useremail: user.name,
        message: `User ${currentUserEmail} has shown interest in ${user.name} with phone number ${user.phone}`,
      },'e1v34y55IRsEwGMS4');
      alert("Email successfully sent. Please check your inbox.");
    } catch (error) {
      console.log(error);
    }
    setShowInterestButton(false);
  };

  return (
    <div className="card">
      <div className="card-header">
        <h2>{props.data.userType.toUpperCase()}</h2>
      </div>
      <div className="card-body">
        <h5 className="card-title">{props.data.name}</h5>
        <p className="card-text">{props.data.address}</p>
        {showInterestButton && (
          <button
            className="btn btn-primary"
            onClick={() => emailSubmit(props.data)}
          >
            Show Interest
          </button>
        )}
      </div>
    </div>
  );
};

export default Users;
