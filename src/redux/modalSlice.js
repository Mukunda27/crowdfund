import { createSlice } from "@reduxjs/toolkit";

export const modalSlice = createSlice({
  name: "modal",
  initialState: {
    showSuccessModal: false,
    showSelectionModal: false,
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
    },
  },
});

export const { setSuccessModalState, setSelecctionModalState } =
  modalSlice.actions;

export default modalSlice.reducer;
