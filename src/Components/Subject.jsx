import React from "react";
import { Link } from "react-router-dom";
import Dropdown from 'react-bootstrap/Dropdown';
function Subject() {
    return (
        <section className="mt-3">
            <Dropdown>
                <Dropdown.Toggle variant="success" id="dropdown-basic">
                    Choose Class
                </Dropdown.Toggle>

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
            <h1 className="text-center text-light text-decoration-underline mb-3">List Of Subjects</h1>
            <div className="row">
                <div className="col-lg-3 col-md-6 mb-3">
                    <div className="card text-bg-dark">
                        <div className="card-body">
                            <img src="../../images/Science.jpg" className="img-fluid" alt="" />
                            <h5 className="card-title">HTML</h5>
                            <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                            {/* <a href="https://rzp.io/l/RgxtgC3sA" className="btn btn-primary text-bg-dark">Buy Now</a> */}
                        </div>
                    </div>
                </div>
                <div className="col-lg-3 col-md-6 mb-3">
                    <div className="card text-bg-dark">
                        <div className="card-body">
                            <img src="../../images/Maths.jpg" className="img-fluid" alt="" />
                            <h5 className="card-title">CSS</h5>
                            <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                            {/* <a href="https://rzp.io/l/VGduY5sa" class="btn btn-primary text-bg-dark">Buy Now</a> */}
                        </div>
                    </div>
                </div>
                <div className="col-lg-3 col-md-6 mb-3">
                    <div className="card text-bg-dark">
                        <div className="card-body">
                            <img src="../../images/English.jpg" className="img-fluid" alt="" />
                            <h5 className="card-title">Javascript</h5>
                            <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                            {/* <a href="https://rzp.io/l/VGduY5sa" class="btn btn-primary text-bg-dark">Buy Now</a> */}
                        </div>
                    </div>
                </div>
                <div className="col-lg-3 col-md-6 mb-3">
                    <div className="card text-bg-dark">
                        <div className="card-body">
                            <img src="../../images/Hindi.jpg" className="img-fluid" alt="" />
                            <h5 className="card-title">Python</h5>
                            <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                            {/* <a href="https://rzp.io/l/VGduY5sa" class="btn btn-primary text-bg-dark">Buy Now</a> */}
                        </div>
                    </div>
                </div>

            </div>

        </section>
    );
}

export default Subject;
