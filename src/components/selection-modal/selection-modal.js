import React, { useReducer } from "react";
import Modal from "../modal/modal";
import SelectionItem from "../selection-item/selection-item";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { setSelecctionModalState } from "../../redux/modalSlice";

import styles from "./selection-modal.module.scss";

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

function SelectionModal({ defaultReward }) {
  const items = useSelector((state) => state.products);

  const initialSelection = items.map((item) => {
    const isSelected = defaultReward === item.id ? true : false;
    return {
      id: item.id,
      selected: isSelected,
    };
  });

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

export default SelectionModal;
