import React from "react";
import { Link, NavLink } from "react-router-dom";
import style from "./Navbar.module.css";


function Navbar() {
  return (
    <nav className={style.navbar}>
      <div className={style.container_fluid}>
        <div className="navbar-header">
          <Link to="/"> 
            <div className={style.pranit}>
              <img src={'../../images/Logo.png'} />
            </div>
          </Link>
        </div>
        <div className={style.navbar_middle}>
          <Link to="#" className={style.nav_link}>Home</Link>
          <Link to="#" className={style.nav_link}>Contact</Link>
          <Link to="/AboutUs" className={style.nav_link}>About Us</Link>
        </div>
        <div className={style.navbar_right}>
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