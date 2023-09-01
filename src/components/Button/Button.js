import React from "react";
import styles from "./button.module.css";

export default function Button({btnText, icon, isOutline, isLarge, margin}) {
  return (
    <button className={`btn btn-${isOutline ? "outline-" : ""}dark mb-3 ${margin} ${styles.custom} 
    ${isLarge ? styles.large_btn : ""} ${styles.text}`}>
      {icon} {btnText}
    </button>
  );
}