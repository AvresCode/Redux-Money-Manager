import { configureStore } from "@reduxjs/toolkit";
import balanceReducer from "./balance/slice";

const store = configureStore({
  reducer: {
    balance: balanceReducer
  },
});

export default store;