import React from "react";
import heroStyles from "./hero.module.css";
import heroImage from "../images/hero-image.png";
import flipkart from "../images/flipkart.png";
import amazon from "../images/amazon.png";
export default function Hero() {
  return (
    <div className="container mt-3">
      <div className="row">
        <div className={`col-12 col-lg-6 order-2 order-lg-1 order-md-1 d-flex justify-items-center ${heroStyles.hero_content}`}>
          <h1 className={`mb-4 ${heroStyles.h1_text}`}>
            YOUR FEET DESERVE <br />
            THE BEST
          </h1>
          <p className={`mb-4 ${heroStyles.p_text}`}>
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
          <p className="mt-4 mb-1" style={{fontWeight: "300"}}>Also available on</p>
          <div className="brand-icons">
            <img
              src={flipkart}
              width={50}
              className="me-2"
              alt="flipkart"
            ></img>
            <img src={amazon} width={50} className="me-2" alt="amazon"></img>
          </div>
        </div>
        <div className="col-12 col-lg-6 order-1 order-lg-2 order-md-2">
          <img
            src={heroImage}
            width={900}
            className="img-fluid ms-3"
            alt="hero-img"
          />
        </div>
      </div>
    </div>
  );
}
