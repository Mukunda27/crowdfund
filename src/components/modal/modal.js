import React, { useLayoutEffect } from "react";
import { ReactComponent as Close } from "../../assets/icon-close-modal.svg";

import styles from "./modal.module.scss";

function Modal(props) {
  useLayoutEffect(() => {
    const body = document.body;
    body.style.height = "100vh";
    body.style.overflowY = "hidden";
    return () => {
      const body = document.body;
      body.style.height = "";
      body.style.overflowY = "";
    };
  }, []);

  return (
    <>
      <div className={styles.modalBackground}></div>
      <div className={styles.modal}>
        {props.dismissable && (
          <div className={styles.closeContainer}>
            <Close onClick={props.closed} className={styles.close} />
          </div>
        )}
        <div className={styles.modalBody}>{props.children}</div>
      </div>
    </>
  );
}

export default Modal;
