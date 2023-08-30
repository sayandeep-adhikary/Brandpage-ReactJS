import React from "react";
import "../css/hero.css";
import "../css/redButton.css";
import heroImage from "../images/hero-image.png";
import flipkart from "../images/flipkart.png";
import amazon from "../images/amazon.png";
export default function Hero() {
  return (
    <div className="container mt-4">
      <div className="row">
        <div className="col order-2 order-lg-1 order-md-1 d-flex justify-items-center hero-content ms-5 ps-5">
          <h1 className="mb-4">
            YOUR FEET DESERVE <br />
            THE BEST
          </h1>
          <p className="mb-4">
            YOUR FEET DESERVE THE BEST AND WE'RE HERE TO HELP YOU WITH OUR
            SHOES. YOUR FEET DESERVE THE BEST AND WE'RE HERE TO HELP YOU WITH
            OUR SHOES.
          </p>
          <div className="buttons">
            <button className="btn btn-danger red-btn me-2 my-2">
              Shop Now
            </button>
            <button
              className="btn btn-outline-dark mx-2 my-2"
              style={{ borderRadius: "0", padding: "4px 15px" }}
            >
              Category
            </button>
          </div>
          <p className="mt-4 mb-1">Also available on</p>
          <div className="brand-icons">
            <img src={flipkart} width={50} className="me-2"></img>
            <img src={amazon} width={50} className="me-2"></img>
          </div>
        </div>
        <div className="col order-1 order-lg-2 order-md-2 d-flex align-items-center justify-items-center pe-5">
          <img
            src={heroImage}
            width={900}
            className="img-fluid"
            alt="hero-image"
          />
        </div>
      </div>
    </div>
  );
}
