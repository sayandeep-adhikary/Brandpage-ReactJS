import React from "react";
import nike from "../images/nike.png";
export default function Location() {
  return (
    <>
      <div
        className="container d-flex align-items-center justify-content-center"
        style={{ marginTop: "5rem" }}
      >
        <img src={nike} alt="nike logo" width={300} className="my-3" />
      </div>
      <div className="lead text-center">
      <i className="fa-solid fa-location-dot me-3"/>Quest Mall, 33, Syed Amir Ali Ave, Kolkata - 700152
      </div>
      <div className="lead text-center">
      <i class="fa-solid fa-phone me-3"/>033 2287 0651
      </div>
    </>
  );
}
