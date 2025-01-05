import React, { Component } from "react";
import pic from "./assets/logo1.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { Link } from 'react-router-dom';



export class Navbar extends Component {
 
  render() {
    return (
      <React.Fragment>
        <nav className="navbar new navbar-expand-lg px-5 mb-5">
          {/* <a className="navbar-brand" href="/#">Navbar</a> */}
          <div className="logo-img">
            <img src={pic} alt="des" />
          </div>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item pe-5 fw-bold active">
                <a className="nav-link" href="/">
                  Home
                </a>
              </li>
              <li className="nav-item pe-5 fw-bold">
                <a className="nav-link" href="/#">
                  About
                </a>
              </li>
              <li className="nav-item pe-5 fw-bold">
                <a className="nav-link" href="/#">
                  Courses
                </a>
              </li>
              <li className="nav-item pe-5 fw-bold dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="/#"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="true"
                >
                  Pages
                </a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li>
                    <a className="dropdown-item" href="/#">
                      Action
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="/#">
                      Another action
                    </a>
                  </li>
                  <div className="dropdown-divider"></div>
                  <li>
                    <a className="dropdown-item" href="/#">
                      Something else here
                    </a>
                  </li>
                </ul>
              </li>

              <li className="nav-item pe-5 fw-bold">
                <Link className="nav-link" to="/login">
                  Log in
                </Link>
              </li>
            </ul>
            <form className="form-inline my-2 my-lg-0">
              <div className="position-relative">
                <input
                  className="form-control mr-sm-2"
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                  
                />
                <div className="position-absolute">
                  <button className="btn my-2 my-sm-0" type="submit">
                    <FontAwesomeIcon
                      icon={faMagnifyingGlass}
                      style={{ color: "#d1d1d1" }}
                    />
                  </button>
                </div>
              </div>
            </form>
          </div>
        </nav>

      
      </React.Fragment>
    );
  }

}

export default Navbar;


