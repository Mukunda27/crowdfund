import React, { useReducer, useState } from "react";
import Modal from "../modal/modal";
import Button from "../button/button";
import { useDispatch } from "react-redux";
import { setSelecctionModalState } from "../../redux/modalSlice";

import styles from "./selection-modal.module.scss";

import items from "../../selectionItems";

const initialSelection = items.map((item) => {
  return {
    id: item.id,
    selected: false,
  };
});

function handleSelection(state, action) {
  return state.map((item) => {
    if (item.id === action.id) {
      return {
        id: item.id,
        selected: true,
      };
    } else {
      return {
        id: item.id,
        selected: false,
      };
    }
  });
}

function SelectionModal() {
  const [selected, setSelection] = useReducer(
    handleSelection,
    initialSelection
  );
  const dispatch = useDispatch();

  const closeSelectionModal = () => {
    dispatch(setSelecctionModalState({ modalState: false, accepted: false }));
  };

  const itemSelected = (id) => {
    setSelection({ id });
  };

  return (
    <Modal dismissable={true} closed={closeSelectionModal}>
      <div className={styles.selectionModal}>
        <span className={styles.modalTitle}>Back this project </span>
        <span className={styles.modalSubTitle}>
          Want to sipport us in bringing Mastercraft Bamboo Monitor Riser out in
          this world
        </span>

        {items.map((item) => {
          return (
            <SelectionItem
              selected={selected.filter((it) => it.id === item.id)[0]?.selected}
              key={item.id}
              item={item}
              itemSelected={itemSelected}
            ></SelectionItem>
          );
        })}
      </div>
    </Modal>
  );
}

function SelectionItem({ item, selected, itemSelected }) {
  const [pledgedAmt, setPledgedAmt] = useState("");
  const dispatch = useDispatch();

  const disabledStyle =
    item.remaining <= 0
      ? { color: "hsl(0, 0%, 48%)", pointerEvents: "none" }
      : {};

  const amt = pledgedAmt
    ? pledgedAmt
    : item.pledgeAmount
    ? item.pledgeAmount
    : 0;

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
          <Button clicked={confirmSelection} className={styles.confirmPledge}>
            Continue
          </Button>
        </div>
      )}
    </div>
  );
}

export default SelectionModal;
