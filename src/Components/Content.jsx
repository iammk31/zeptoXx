import React, { useState } from 'react';
import { Segment } from "semantic-ui-react";

import emailjs from '@emailjs/browser';
import Pricing from './Pricing';
import Work from './Work';
import Testimonial from './Testimonial';
import Chatbot from './Chatbot';
import ActiveChatbot from './ActiveChatbot';

function Content() {
    const [isChatOpen, setIsChatOpen] = useState(false);
    const [isChatActive, setIsChatActive] = useState(false);
    const toggleChat = () => {
      setIsChatOpen(!isChatOpen);
    };
    const toggleChatBot = () => {
      setIsChatActive(!isChatActive);
    };

    return (
      <>
      <section className="mb-2" style={{overflowY: "hidden"}}>
        <div  className={` ${isChatOpen}`} style={{ backgroundImage: "url('../../images/factors.gif')", backgroundSize: "cover", backgroundPosition: "center", height: "110vh", width: "100vw", paddingTop: "15px"}}>
            <div className="d-flex flex-col justify-content-between">
              <button
                onClick={toggleChat}
                className="btn btn-sm btn-success"
                style={{marginLeft: "10px"}}
              >
                {isChatOpen ? 'Minimize Chat' : 'Contact Us'}
              </button>
            </div>
            <div className="d-flex flex-row justify-content-end align-items-end fixed-bottom p-3">
            {isChatActive && (
              <div className="card">
                <ActiveChatbot/>
              </div>
            )}
              <button onClick={toggleChatBot} className="btn btn-sm btn-outline-secondary" style={{height: '60px', width: '60px'} }>
                <img src="../../images/chatbot.png" className='img-fluid' alt="" />
              </button>
            </div>
            <div className="row">
              <div className="col-lg-4 col-md-6 col-sm-8">
                {isChatOpen && (
                  <Chatbot />
                )}
              </div>
            </div>
        </div>
      </section>
      <div style={{}}>
      <Pricing/>
      </div>

      <Work />
      <Testimonial />
      </>
    );
}

export default Content;
