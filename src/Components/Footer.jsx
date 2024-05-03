import React from "react";
import "./Footer.css";


function Footer() {
  return (
    <div className="main-footer bg-dark">
      <div className="container">
        <div className="row">
          <div className="col">
            <h5>zeptoX Education</h5>
            <h6 className="list-unstyled">
              <li>+91-9835274522</li>
              <li>Patna,Bihar</li>
              <li>103</li>
            </h6>
          </div>
          <div className="col">
            <h4>Company</h4>
            <ui className="list-unstyled">
              <li>About Us</li>
              <li>Privacy Policy</li>
              <li>Terms & Conditions</li>
            </ui>
          </div>
          <div className="col">
            <h4>Help & support</h4>
            <ui className="list-unstyled">
              <li>User Guidelines</li>
              <li>Takedown Policy</li>
            </ui>
          </div>
        </div>
        <hr />
        <div className="row">
          <p className="col-sm">
            &copy;{new Date().getFullYear()} zeptoX Education | All rights reserved |
            Terms Of Service | Privacy
          </p>
        </div>
      </div>
    </div>
  );
}

export default Footer;