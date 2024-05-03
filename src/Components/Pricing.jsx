import React from "react";
import { Link } from "react-router-dom";
function Pricing() {
  return (
    <section className="mt-3">
      <h1 className="text-center text-light text-decoration-underline mb-3">What we offer</h1>
      <div className="row align-item-center justify-content-center">
        <div className="col-lg-3 col-md-6 mb-3">
          <div className="card">
            <div className="card-body">
              <img src="../../images/react.png" className="img-fluid" alt="" />
              <h5 className="card-title">React Js</h5>
              <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
              <a href="https://rzp.io/l/RgxtgC3sA" class="btn btn-primary">Buy Now</a>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-md-6 mb-3">
          <div className="card">
            <div className="card-body">
              <img src="../../images/All-Subjects.jpg" className="img-fluid" alt="" />
              <h5 className="card-title">All Subjects</h5>
              <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
              <Link to="/Subject">
                <button className="btn btn-primary">Click</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Pricing;
