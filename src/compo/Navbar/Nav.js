import React from "react";
import { Link } from "react-router-dom";
import logo from "../images/logo_175_yr.png";

function hideMenu() {
  const navLinks = document.getElementById("navLinks");
  navLinks.style.right = "-200px";
}

function Nav({ isnothome }) {
  return (
    <div className="menuContainer">
      <div className="menuWrapper">
        <div className="logo">
          {isnothome === "true" ? <img src={logo} alt="" /> : <></>}
        </div>
        <nav className="navbar navbar-expand-lg navbar-light">
          <div className="container-fluid">
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation">
              <span className="navbar-toggler-icon" />
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              
                  <Link className="nav-link" to="/" style={{ color: "black" }}>
                    Home
                  </Link><br/>
                
                  <Link
                    className="nav-link"
                    to="/Schedule"
                    style={{ color: "black" }}>
                    Schedule
                  </Link><br/>
                  <a
                    className="nav-link"
                    style={{ color: "black" }}
                    href="http://researchgallery.iitr.ac.in/"
                    target={"_blank"}
                    rel="noopener noreferrer">
                    ResearchGallery
                  </a><br/>
                  <Link
                    className="nav-link"
                    to="/ird2022"
                    style={{ color: "black" }}>
                    IRD2022
                  </Link><br/>
                  <Link
                    className="nav-link"
                    to="/Contact"
                    style={{ color: "black" }}>
                    Contact
                  </Link>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
}

export default Nav;
