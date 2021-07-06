import { createSlice } from "@reduxjs/toolkit";

export const backingSlice = createSlice({
  name: "backing",
  initialState: {
    backedAmt: 89914,
    total: 100000,
    numberOfBackers: 5007,
  },
  reducers: {
    addBacker: (state, action) => {
      state.numberOfBackers += 1;
      state.backedAmt += action.payload.backingAmt;
    },
  },
});

export const { addBacker } = backingSlice.actions;

export default backingSlice.reducer;
