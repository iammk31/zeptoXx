import React from "react";
import { Link, NavLink } from "react-router-dom";
import style from "./Navbar.module.css";


function Navbar() {
  return (
    <nav className="navbar navbar-expand-md sticky-top navbar-light bg-light">
      <div className="container-fluid">
        <div className="navbar-brand">
          <Link to="/"> 
            <div className={style.pranit}>
              <img src={'../../images/Logo.png'} />
            </div>
          </Link>
        </div>
        <div className="d-flex align-items-center gap-3">
          <Link to="/" className={style.nav_link}>Home</Link>
          <Link to="/AboutUs" className={style.nav_link}>About Us</Link>
        </div>
        <div className="d-flex align-items-center gap-3">
          <Link to="/signup">
            <button className="btn btn-outline-primary">SignUp</button>
          </Link>
          <Link to="/login">
            <button className="btn btn-outline-success">LogIn</button>
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;