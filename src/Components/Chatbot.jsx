import { send } from "@emailjs/browser";
import React, { useState } from "react";

const chatbotMessages = [
  {
    id: 1,
    value: "Hello and thank you for visiting zeptoX",
  },
  {
    id: 2,
    value: "Please enter your email below",
  },
  {
    id: 3,
    value: "Enter your query here",
  },
  {
    id: 4,
    value: "Thank you! We have recieved your query",
  },
];

const ChatMessage = ({ messages }) => {
  return (
    <div className="d-flex flex-row justify-content-start mb-4">
      <img
        src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava1-bg.webp"
        alt="avatar 1"
        style={{ width: "45px", height: "100%" }}
      />
      <div className="d-flex flex-column">
        {messages.map((message) => (
          <div
            className="p-3 ms-3"
            style={{
              borderRadius: "15px",
              backgroundColor: "rgba(57, 192, 237,.2)",
            }}
          >
            <p className="small mb-0">{message.value}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

function Chatbot() {
  const [userQuery, setUserQuery] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [showSecondMessage, setShowSecondMessage] = useState(false);
  const [showEmail, setShowEmail] = useState(false);
  const [showQuery, setShowQuery] = useState(false);
  const [showThirdMessage, setShowThirdMessage] = useState(false);
  

  const handleEmailSet = () => {
    console.log(userEmail);
        if (!userEmail.match(/^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/)) {
          alert("Please enter a valid email address");
          return "Please enter a valid email address";
        }
    setShowSecondMessage(true);
    setShowEmail(true);
  };

  const hanldeQuerySet = () => {
    setShowThirdMessage(true);
    setShowQuery(true);
    sendEmail();
  };

  const sendEmail = () => {
    send("service_oa8btcp", "template_2ebuq8v", {
      username: userEmail,
      message: userQuery,
    },'e1v34y55IRsEwGMS4')
      .then((response) => {
        console.log("SUCCESS!", response.status, response.text);
      })
      .catch((err) => {
        console.log("FAILED...", err);
      });
  };

  return (
    <section style={{ backgroundColor: "#eee", }}>
      <div className="card" id="chat1" style={{ borderRadius: "15px",height:"80vh" }}>
        <div
          className="card-header d-flex justify-content-between align-items-center p-3 bg-info text-white border-bottom-0"
          style={{
            borderTopLeftRadius: "15px",
            borderTopRightRadius: "15px",
          }}
        >
          <i className="fas fa-angle-left"></i>
          <p className="mb-0 fw-bold">Chat With zeptoX</p>
          <i className="fas fa-times"></i>
        </div>
        <div className="card-body">
          <ChatMessage messages={chatbotMessages.slice(0, 2)} />
          <div className="d-flex flex-column align-items-end">
            {!showEmail && (
              <div
                className="p-3 me-3 border"
                style={{ borderRadius: "15px", backgroundColor: "#fbfbfb" }}
              >
                <div
                  data-mdb-input-init
                  className="form-outline d-flex flex-row"
                >
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Type your message"
                    onChange={(e) => setUserEmail(e.target.value)}
                    
                  />
                  <button
                    className="btn btn-outline-primary"
                    onClick={handleEmailSet}
                    
                  >
                    Send
                  </button>
                </div>
              </div>
            )}
            {showEmail && (
              <div className="p-2 me-3 bg-info rounded-3">
                <label>{userEmail}</label>
              </div>
            )}
          </div>
          {showSecondMessage && (
            <div>
              <ChatMessage messages={chatbotMessages.slice(2, 3)} />
              <div className="d-flex flex-row justify-content-end mb-4">
                {!showQuery && (
                  <div
                    className="p-3 me-3 border"
                    style={{ borderRadius: "15px", backgroundColor: "#fbfbfb" }}
                  >
                    <div
                      data-mdb-input-init
                      className="form-outline d-flex flex-row"
                    >
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Type your message"
                        onChange={(e) => setUserQuery(e.target.value)}
                      />
                      <button
                        className="btn btn-outline-primary"
                        onClick={hanldeQuerySet}
                      >
                        Send
                      </button>
                    </div>
                  </div>
                )}
                {showQuery && (
                  <div className="p-2 me-3 bg-info rounded-3">
                    <label>{userQuery}</label>
                  </div>
                )}
              </div>
            </div>
          )}

          {showThirdMessage && (
            <ChatMessage messages={chatbotMessages.slice(3)} />
          )}
        </div>
      </div>
    </section>
  );
}

export default Chatbot;
