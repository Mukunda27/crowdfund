import { createSlice } from "@reduxjs/toolkit";

export const productsSlice = createSlice({
  name: "products",
  initialState: [
    {
      id: 0,
      name: "Pledge with no reward",
      description: `Choose to support us witout a reward if you simply 
              believe in our project. As a backer, you will be signed up to 
              receive product updates via email`,
    },
    {
      id: 1,
      name: "Bamboo Stand",
      pledgeAmount: 25,
      description: `You get an ergonomic stand made out of bamboo. You have 
      helped us launch our promational campaign and you will be added to a special member backer list`,
      remaining: 101,
    },
    {
      id: 2,
      name: "Black Edition Stand",
      pledgeAmount: 75,
      description: `You get a Balck special edition computer stand and  a special thank you
        You will be added to our backing member list. Shipping is included`,
      remaining: 64,
    },
    {
      id: 3,
      name: "Mahogany special edition",
      pledgeAmount: 200,
      description: `You get two special edition Mahogany stands, a backer T_shirt and a personal thank you
        You will be added to our backing member list. Shipping is included`,
      remaining: 0,
    },
  ],
  reducers: {
    selectReward: (state, action) => {
      const index = state.findIndex((item) => item.id === action.payload.id);
      state[index].remaining -= 1;
    },
  },
});

export const { selectReward } = productsSlice.actions;

export default productsSlice.reducer;
