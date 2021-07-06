import React from "react";
import Button from "../button/button";
import styles from "./product-item.module.scss";

import { useDispatch } from "react-redux";
import { setSelecctionModalState } from "../../redux/modalSlice";

function ProductItem({ item }) {
  const dispatch = useDispatch();
  const disabled = item.remaining <= 0 ? { color: "hsl(0, 0%, 48%)" } : {};

  const displaySelectionModal = () => {
    dispatch(
      setSelecctionModalState({
        modalState: true,
        accepted: false,
        rewardId: item.id,
      })
    );
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
        <Button clicked={displaySelectionModal} disabled={item.remaining <= 0}>
          Select Reward
        </Button>
      </div>
    </div>
  );
}

export default ProductItem;
