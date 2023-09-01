import React from "react";
import contactStyles from "./contact.module.css";
import Button from "../Button/Button";
import { MdMessage } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { HiMail } from "react-icons/hi";
export default function Contact() {
  return (
    <div className={`container ${contactStyles.container}`}>
      <div className="container">
        <h1 className={`${contactStyles.h1_text}`}>Contact Us</h1>
        <p className={`${contactStyles.p_text}`}>
          LET'S CONNECT: WE'RE HERE TO HELP, AND WE'D LOVE TO HEAR FROM YOU
          WHETHER YOU HAVE A QUESTION, COMMENT OR JUST WANT TO CHAT, YOU CAN
          REACH OUT TO US THROUGH THE CONTACT FORM OF THIS PAGE, OR BY PHONE,
          EMAIL OR SOCIAL MEDIA.
        </p>
      </div>
      <div className="container contactForm">
        <div className="row">
          <div className="col-lg-6 col-12 order-2 order-lg-1">
            <div className="container d-flex align-items-center justify-content-between px-0">
              <Button
                btnText={"VIA SUPPORT CHAT"}
                icon={<MdMessage className="me-2" fontSize={"24px"} />}
              />
              <Button
                btnText={"VIA CALL"}
                icon={<FaPhoneAlt className="me-2" fontSize={"20px"} />}
                margin={"ms-2"}
              />
            </div>
            <Button
              btnText={"VIA EMAIL FORM"}
              icon={<HiMail className="me-2" fontSize={"24px"} />}
              isOutline={true}
              isLarge={true}
            />
            <form>
              <div className={`${contactStyles.form_control} my-3`}>
                <label htmlFor="name">Name</label>
                <input type="text" name="name" autoComplete="off"/>
              </div>
              <div className={`${contactStyles.form_control} my-3`}>
                <label htmlFor="email">Email</label>
                <input type="text" name="email" autoComplete="off"/>
              </div>
              <div className={`${contactStyles.form_control} my-3`}>
                <label htmlFor="textarea">Text</label>
                <textarea name="textarea"></textarea>
              </div>
            </form>
            <div className="container d-flex align-items-center justify-content-center">
              <Button btnText={"Submit"} /> 
            </div>
          </div>
          <div className="col-lg-6 col-12 order-1 order-lg-2 d-flex align-items-center justify-content-center">
            <img
              src="https://img.freepik.com/premium-vector/man-holds-24x7-sign-front-face-symbolizing-nonstop-work-no-days-off-due-strict-deadlines-incognito-support-manager-reporting-around-clock-providing-24x7-assistance-customers_160308-7634.jpg"
              width={500}
              style={{ minWidth: "200px" }}
              className="img-fluid mb-3"
              alt="24x7 service support"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
