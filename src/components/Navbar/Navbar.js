import React from "react";
import { NavLink } from "react-router-dom";
import navStyles from "./navbar.module.css";
export default function Navbar() {
  const changeActive = (e) => {
    let nav_links = Array.from(document.getElementsByClassName("nav-link"));
    nav_links.forEach((link) =>{
      link.classList.remove("active");
    })
    let active = document.getElementById(e.currentTarget.id);
    active.classList.add("active");
  };
  return (
    <nav className="navbar navbar-expand-lg my-2">
      <div className="container-fluid">
        <a className="navbar-brand ms-lg-5 ms-sm-0" href="/">
          <img
            src="https://pngimg.com/uploads/nike/nike_PNG12.png"
            alt="Nike"
            width={80}
          />
        </a>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div
          className={`collapse navbar-collapse ${navStyles.nav_options}`}
          id="navbarSupportedContent"
        >
          <ul className="navbar-nav">
            <li className="nav-item text-center">
              <NavLink
                className="nav-link"
                aria-current="page"
                to="/"
                onClick={changeActive}
                id="menu"
              >
                <p className={`${navStyles.nav_items}`}>MENU</p>
              </NavLink>
            </li>
            <li className="nav-item text-center">
              <NavLink
                className="nav-link"
                to="/about"
                onClick={changeActive}
                id="about"
              >
                <p className={`${navStyles.nav_items}`}>ABOUT</p>
              </NavLink>
            </li>
            <li className="nav-item text-center">
              <NavLink
                className="nav-link"
                to="/contact"
                onClick={changeActive}
                id="contact"
              >
                <p className={`${navStyles.nav_items}`}>CONTACT</p>
              </NavLink>
            </li>
            <li className="nav-item text-center">
              <NavLink
                className="nav-link"
                to="/location"
                onClick={changeActive}
                id="location"
              >
                <p className={`${navStyles.nav_items}`}>LOCATION</p>
              </NavLink>
            </li>
          </ul>
          <div className={`${navStyles.nav_loginbtn} me-5 text-center ms-5`}>
            <button className="btn btn-danger red-btn">Login</button>
          </div>
        </div>
      </div>
    </nav>
  );
}
