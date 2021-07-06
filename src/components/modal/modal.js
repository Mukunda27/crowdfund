import React, { useLayoutEffect } from "react";
import { ReactComponent as Close } from "../../assets/icon-close-modal.svg";
import { useDispatch } from "react-redux";
import {
  setSelecctionModalState,
  setSuccessModalState,
} from "../../redux/modalSlice";

import styles from "./modal.module.scss";

function Modal(props) {
  useLayoutEffect(() => {
    const body = document.body;
    body.style.height = "100vh";
    body.style.overflowY = "hidden";

    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        dispatch(
          setSelecctionModalState({ modalState: false, accepted: false })
        );
        dispatch(setSuccessModalState(false));
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      const body = document.body;
      body.style.height = "";
      body.style.overflowY = "";

      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  const dispatch = useDispatch();

  const onBackgroundClicked = () => {
    dispatch(setSelecctionModalState({ modalState: false, accepted: false }));
    dispatch(setSuccessModalState(false));
  };

  return (
    <>
      <div
        onClick={onBackgroundClicked}
        className={styles.modalBackground}
      ></div>
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
