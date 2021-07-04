import React from "react";
import Button from "../button/button";
import styles from "./product-item.module.scss";

import { useDispatch } from "react-redux";
import { setSuccessModalState } from "../../redux/modalSlice";

function ProductItem({ item }) {
  const dispatch = useDispatch();
  const disabled = item.remaining <= 0 ? { color: "hsl(0, 0%, 48%)" } : {};

  const displaySuccessModal = () => {
    dispatch(setSuccessModalState(true));
  };

  return (
    <div className={styles.itemContainer}>
      <div className={styles.itemHeader}>
        <span style={disabled} className={styles.itemName}>
          {item.name}
        </span>
        <span className={styles.pledge}>
          {`Pledge \u0024 ${item.pledgeAmount} or more`}
        </span>
      </div>
      <div className={styles.itemBody}>{item.description}</div>
      <div className={styles.itemFooter}>
        <span style={disabled} className={styles.itemsRem}>
          <strong className={styles.remaining}>{item.remaining} </strong> left
        </span>
        <Button clicked={displaySuccessModal} disabled={item.remaining <= 0}>
          Select Reward
        </Button>
      </div>
    </div>
  );
}

export default ProductItem;
