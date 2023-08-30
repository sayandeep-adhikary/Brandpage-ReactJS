import React from "react";
import "../css/navbar.css";
import "../css/redButton.css";
export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg my-2">
      <div className="container-fluid">
        <a className="navbar-brand ms-lg-5 ms-sm-0" href="/">
          <img
            src="https://pngimg.com/uploads/nike/nike_PNG12.png"
            alt="Bootstrap"
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
          className="collapse navbar-collapse nav-options"
          id="navbarSupportedContent"
        >
          <ul className="navbar-nav">
            <li className="nav-item text-center">
              <a className="nav-link active" aria-current="page" href="/">
                <p className="nav-items">MENU</p>
              </a>
            </li>
            <li className="nav-item text-center">
              <a className="nav-link" href="/">
                <p className="nav-items">LOCATION</p>
              </a>
            </li>
            <li className="nav-item text-center">
              <a className="nav-link" href="/">
                <p className="nav-items">ABOUT</p>
              </a>
            </li>
            <li className="nav-item text-center">
              <a className="nav-link" href="/">
                <p className="nav-items">CONTACT</p>
              </a>
            </li>
          </ul>
          <div className="nav-login-btn me-5 text-center ms-5">
            <button className="btn btn-danger red-btn">Login</button>
          </div>
        </div>
      </div>
    </nav>
  );
}
