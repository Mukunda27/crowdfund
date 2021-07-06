import React, { useState } from "react";

import Button from "../button/button";
import { useDispatch } from "react-redux";
import { setSelecctionModalState } from "../../redux/modalSlice";
import { addBacker } from "../../redux/backingSlice";
import { selectReward } from "../../redux/productsSlice";

import styles from "./selection-item.module.scss";

function SelectionItem({ item, selected, itemSelected }) {
  const [pledgedAmt, setPledgedAmt] = useState("");
  const dispatch = useDispatch();

  const disableConfirmButton = pledgedAmt
    ? parseInt(pledgedAmt) < item.pledgeAmount
      ? true
      : false
    : item.pledgeAmount
    ? true
    : false;

  const disabledStyle =
    item.remaining <= 0
      ? { color: "hsl(0, 0%, 48%)", pointerEvents: "none" }
      : {};

  const amt = pledgedAmt ? pledgedAmt : 0;

  const selectedBorder = selected
    ? {
        border: "1px solid hsl(176, 72%, 28%)",
      }
    : {};

  const pledgeAmtEnChanged = (e) => {
    setPledgedAmt(e.target.value);
  };

  const confirmSelection = () => {
    dispatch(setSelecctionModalState({ modalState: false, accepted: true }));
    dispatch(addBacker({ backingAmt: pledgedAmt ? parseInt(pledgedAmt) : 0 }));
    dispatch(selectReward({ id: item.id }));
  };

  return (
    <div
      style={{ ...selectedBorder, ...disabledStyle }}
      className={styles.selectionItem}
    >
      <div className={styles.selectionRadio}>
        <input
          onChange={() => {
            itemSelected(item.id);
          }}
          type="radio"
          checked={selected}
          id={`radio${item.id}`}
        />
        <label htmlFor={`radio${item.id}`}></label>
      </div>

      <span style={disabledStyle} className={styles.itemTitle}>
        {item.name}
      </span>
      {item.pledgeAmount && (
        <span
          className={styles.pledge}
        >{`Pledge ${item.pledgeAmount} or more`}</span>
      )}
      {"remaining" in item && (
        <span className={styles.remaining}>
          <strong>{item.remaining}</strong> left
        </span>
      )}
      <span className={styles.description}> {item.description} </span>
      {selected && (
        <div className={styles.selectionConfirmation}>
          <input
            type="number"
            onChange={pledgeAmtEnChanged}
            placeholder="Enter pledge amount"
            className={styles.pledgeSelection}
            value={pledgedAmt}
          />
          <span className={styles.selectedPledge}>{`\u0024 ${amt}`}</span>
          <Button
            disabled={disableConfirmButton}
            clicked={confirmSelection}
            className={styles.confirmPledge}
          >
            Continue
          </Button>
        </div>
      )}
    </div>
  );
}

export default SelectionItem;
