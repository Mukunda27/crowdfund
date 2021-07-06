import { createSlice } from "@reduxjs/toolkit";

export const modalSlice = createSlice({
  name: "modal",
  initialState: {
    showSuccessModal: false,
    showSelectionModal: false,
    defaultReward: null,
  },
  reducers: {
    setSuccessModalState: (state, action) => {
      state.showSuccessModal = action.payload;
    },
    setSelecctionModalState: (state, action) => {
      state.showSelectionModal = action.payload.modalState;
      if (action.payload.accepted) {
        state.showSuccessModal = true;
      }
      state.defaultReward = action.payload.rewardId;
    },
  },
});

export const { setSuccessModalState, setSelecctionModalState } =
  modalSlice.actions;

export default modalSlice.reducer;
