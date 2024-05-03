import React, { useState } from 'react';
import { Segment } from "semantic-ui-react";

import emailjs from '@emailjs/browser';
import Pricing from './Pricing';
import Work from './Work';
import Testimonial from './Testimonial';
import Chatbot from './Chatbot';

function Content() {
    const [isChatOpen, setIsChatOpen] = useState(false);
    const toggleChat = () => {
      setIsChatOpen(!isChatOpen);
    };

    return (
      <>
      <section className="content" >
        <div className={`container container-fluid ${isChatOpen}`} style={{ backgroundImage: "url('../../images/factors.gif')", backgroundSize: "cover", backgroundPosition: "center",  'minHeight': "100vh",'minWidth':'100%',  }}>
            <div className="col-md-4">
              <button
                onClick={toggleChat}
                className=" btn btn-sm btn-outline-secondary"
              >
                {isChatOpen ? 'Minimize Chat' : 'Maximize Chat'}
              </button>
            </div>
          <div className="row">
            <div className="col-lg-4 col-md-6 col-sm-8" >
              {isChatOpen && (
                <Segment floated="right">
                  <Chatbot/>
                </Segment>
              )}
            </div>
          </div>
        </div>
      </section>
      <Pricing/>
      <Work />
      <Testimonial />
      </>
    );
}

export default Content;
