import React from "react";
import { Link } from "react-router-dom";
import Dropdown from 'react-bootstrap/Dropdown';
function Seven() {
    return (
        <section className="mt-3">
            <Dropdown>
                <Link to="/Subject">
                    <Dropdown.Toggle variant="success" id="dropdown-basic">
                        Choose Class
                    </Dropdown.Toggle>
                </Link>

                <Dropdown.Menu>
                    <Link to="/Six">
                        <Dropdown.Item href="#/action-1">Class 6</Dropdown.Item>
                    </Link>
                    <Link to="/Seven">
                        <Dropdown.Item href="#/action-2">Class 7</Dropdown.Item>
                    </Link>
                    <Link to="/Eight">
                        <Dropdown.Item href="#/action-3">Class 8</Dropdown.Item>
                    </Link>
                    <Link to="/Nine">
                        <Dropdown.Item href="#/action-3">Class 9</Dropdown.Item>
                    </Link>
                    <Link to="/Tenth">
                        <Dropdown.Item href="#/action-3">Class 10</Dropdown.Item>
                    </Link>
                    <Link to="/Twelfth">
                        <Dropdown.Item href="#/action-3">Class 11-12</Dropdown.Item>
                    </Link>
                </Dropdown.Menu>
            </Dropdown>
            <h1 className="text-center text-light text-decoration-underline mb-3">Class 6</h1>
            <div className="row">
                <div className="col-lg-3 col-md-6 mb-3">
                    <div className="card">
                        <div className="card-body">
                            <img src="../../images/Science.jpg" className="img-fluid" alt="" />
                            <h5 className="card-title">Science</h5>
                            <p className="card-text">NCERT, S.CHAND, ALL IN ONE</p>
                            <a href="https://rzp.io/l/VGduY5sa" className="btn btn-primary">Buy Now</a>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3 col-md-6 mb-3">
                    <div className="card">
                        <div className="card-body">
                            <img src="../../images/Maths.jpg" className="img-fluid" alt="" />
                            <h5 className="card-title">Mathematics</h5>
                            <p className="card-text">NCERT, RS AGGRAWAL</p>
                            <a href="https://rzp.io/l/WGzQg4kqX" class="btn btn-primary">Buy Now</a>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3 col-md-6 mb-3">
                    <div className="card">
                        <div className="card-body">
                            <img src="../../images/English.jpg" className="img-fluid" alt="" />
                            <h5 className="card-title">English</h5>
                            <p className="card-text">HONEYCOMB, AN ALIEN HAND</p>
                            <a href="https://rzp.io/l/PpvO6eew" class="btn btn-primary">Buy Now</a>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3 col-md-6 mb-3">
                    <div className="card">
                        <div className="card-body">
                            <img src="../../images/Hindi.jpg" className="img-fluid" alt="" />
                            <h5 className="card-title">Hindi</h5>
                            <p className="card-text">वसंत</p>
                            <a href="https://rzp.io/l/nR649KzM" class="btn btn-primary">Buy Now</a>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3 col-md-6 mb-3">
                    <div className="card">
                        <div className="card-body">
                            <img src="../../images/Social.jpg" className="img-fluid" alt="" />
                            <h5 className="card-title">Social Science</h5>
                            <p className="card-text">History, P.Science, Geography</p>
                            <a href="https://rzp.io/l/wquScTIT" class="btn btn-primary">Buy Now</a>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3 col-md-6 mb-3">
                    <div className="card">
                        <div className="card-body">
                            <img src="../../images/Computer.jpg" className="img-fluid" alt="" />
                            <h5 className="card-title">Computer IT</h5>
                            <p className="card-text">NCERT</p>
                            <a href="https://rzp.io/l/MZtgVtBO" class="btn btn-primary">Buy Now</a>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3 col-md-6 mb-3">
                    <div className="card">
                        <div className="card-body">
                            <img src="../../images/Class6.jpg" className="img-fluid" alt="" />
                            <h5 className="card-title">All Subjects</h5>
                            <p className="card-text">NCERT Books Set for Class 6 (English Medium) (7 Books)</p>
                            <a href="https://rzp.io/l/0oUDJXXO" class="btn btn-primary">Buy Now</a>
                        </div>
                    </div>
                </div>
            </div>
            {/* abhi ye hard code ho rha hai lekin baad me isko backend se change krna hoga */}
        </section>
    );
}

export default Seven;
