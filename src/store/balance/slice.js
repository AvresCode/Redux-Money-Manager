import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  amount: 0,
};

export const balanceSlice = createSlice({
  name: "balance",
  initialState,
  reducers: {
    deposit: (state) => {
        console.log("Hello from the reducer!");
        state.amount = state.amount + 10
      },
  },
});

// Action creators are generated for each case reducer function
// as we add cases to our reducer we will also export the corresponding actions
export const {deposit} = balanceSlice.actions;

export default balanceSlice.reducer;