import React from "react";
import styles from "./button.module.scss";

function Button(props) {
  const btnClasses = props.disabled
    ? [styles.customBtn, styles.disabled].join(" ")
    : styles.customBtn;
  return (
    <button onClick={props.clicked} className={btnClasses}>
      {props.children}
    </button>
  );
}

export default Button;
