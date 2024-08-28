import React, { useState, useNavigate, useEffect } from "react";
import axios from "axios";
import { db } from "../../firebase";
import { collection, getDoc, getDocs, query, where } from "firebase/firestore";

const teacherAmount = 50;
const studentAmount = 30;
const BACKEND_URL = "https://zepto-x-back-end.vercel.app/";

const Users = (props) => {
  // const navigate = useNavigate();
  const userType = props.data.userType;
  const username = props.data.name;
  const userEmail = localStorage.getItem("userEmail");
  const [paymentStatus, setPaymentStatus] = useState(false);
  const [showInterestButton, setShowInterestButton] = useState(true);

  const paymentSubmit = async () => {
    localStorage.setItem("productId", props.data.docId);
    const {
      data: { key },
    } = await axios.get(`${BACKEND_URL}/api/getkey`);

    const amount = userType === "student" ? studentAmount : teacherAmount;
    const {
      data: { order },
    } = await axios.post(`${BACKEND_URL}/api/checkout`, {
      amount,
    });

    const options = {
      key,
      amount: order.amount,
      currency: "INR",
      name: "ZeptoX",
      description: "ZeptoX Subscription Fee",
      image: "./images/Logo.png",
      order_id: order.id,
      callback_url: `${BACKEND_URL}/api/paymentverification`,
      prefill: {
        name: username,
        email: userEmail,
      },
      notes: {
        address: "ZeptoX from Amity",
      },
      theme: {
        color: "#3399cc",
      },
    };

    const razor = window.Razorpay(options);
    razor.open();
  };

  console.log(props.data);

  const filterUsers = () => {
    const q = query(
      collection(db, "payments"),
      where("customerId", "==", userEmail),
      where("productId", "==", props.data.docId)
    );

    getDocs(q).then((data) => {
      data.docs.forEach((currentDoc) => {
        if (currentDoc.data().status === "success") {
          setPaymentStatus(currentDoc.data().status);
          setShowInterestButton(false);
        }
      });
    });
  };

  useEffect(() => {
    filterUsers();
  }, []);

  return (
    <div
      className="card"
      style={{
        background: "rgb(4,34,250)",
        background:
          "linear-gradient(90deg, rgba(4,34,250,0.854954481792717) 0%, rgba(201,231,230,1) 0%, rgba(239,243,194,1) 100%)",
      }}
    >
      <div className="card-header">
        <h2>{props.data.userType.toUpperCase()}</h2>
      </div>
      <div className="card-body">
        <h5 className="card-title">{props.data.name}</h5>
        <p className="card-text">{props.data.subject}</p>
        {showInterestButton && (
          <button className="btn btn-primary" onClick={paymentSubmit}>
            Show More Info
          </button>
        )}
        {paymentStatus && (
          <div>
            <p className="card-text">{props.data.phone}</p>
            <p className="card-text">{props.data.address}</p>
            <p className="card-text">{userEmail}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Users;
