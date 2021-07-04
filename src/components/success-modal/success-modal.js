import React from "react";
import Modal from "../modal/modal";
import Button from "../button/button";
import { ReactComponent as Check } from "../../assets/icon-check.svg";

import { useDispatch } from "react-redux";
import { setSuccessModalState } from "../../redux/modalSlice";

import styles from "./success-modal.module.scss";

function SuccessModal() {
  const dispatch = useDispatch();

  const closeSuccessModal = () => {
    dispatch(setSuccessModalState(false));
  };

  return (
    <Modal>
      <div className={styles.successModal}>
        <Check />
        <span className={styles.messageTitle}> Thanks for your support! </span>
        <span className={styles.messageBody}>
          Your pledge brings us one step closer to sharing Mastercraft Bamboo
          Monitor Riser worldwide. You will get an email once our campaign is
          completed
        </span>
        <Button clicked={closeSuccessModal}> Got it! </Button>
      </div>
    </Modal>
  );
}

export default SuccessModal;
