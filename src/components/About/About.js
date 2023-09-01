import React from "react";
import styles from "./about.module.css";
import selfImage from "../images/self_image.jpg";
export default function About() {
  return (
    <div className={`container my-5 d-flex align-items-center justify-content-center ${styles.container}`}>
      <div className="card mb-3" style={{ maxWidth: 800 }}>
        <div className="row g-0">
          <div className="col-md-4">
            <img
              src={selfImage}
              className="img-fluid rounded"
              alt="self_img"
              style={{ height: "100%" }}
            />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title">Nike - Your Feet Deserve The Best</h5>
              <p className="card-text">
                "Experience the world of Nike, where innovation meets style.
                Explore our iconic collections, cutting-edge sports gear, and
                the latest in athletic fashion. Join the movement and unleash
                your potential with Nike."
              </p>
              <p className="card-text">
                <small className="text-body-secondary">
                  Developed By{" "}
                  <a
                    href="https://www.instagram.com/sayandeep.adhikary/"
                    target="_blank"
                    className={styles.link}
                    rel="noreferrer"
                  >
                    @Sayandeep Adhikary
                  </a>
                </small>
                <div>
                  <a
                    href="https://github.com/sayandeep-adhikary"
                    target="_blank"
                    className={styles.link}
                    rel="noreferrer"
                  >
                    <i className="fa-brands fa-square-github fa-2x me-2 my-2" />
                  </a>
                  <a
                    href="https://www.linkedin.com/in/sayandeep-adhikary-029564220/"
                    target="_blank"
                    className={styles.link}
                    rel="noreferrer"
                  >
                    <i className="fa-brands fa-linkedin fa-2x me-2 my-2" />
                  </a>
                  <a
                    href="https://www.instagram.com/sayandeep.adhikary/"
                    target="_blank"
                    className={styles.link}
                    rel="noreferrer"
                  >
                    <i className="fa-brands fa-square-instagram fa-2x me-2 my-2" />
                  </a>
                  <a
                    href="https://www.facebook.com/profile.php?id=100073317752458"
                    target="_blank"
                    className={styles.link}
                    rel="noreferrer"
                  >
                    <i className="fa-brands fa-square-facebook fa-2x me-2 my-2" />
                  </a>
                </div>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
