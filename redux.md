 npx create-react-app money-manager
 create a simple function in app.js 

 Redux steps:
 1.yarn add @reduxjs/toolkit react-redux
 2.Creating a Redux store in src/store/index.js
  import { configureStore } from "@reduxjs/toolkit";
   const store = configureStore({
  reducer: {},
  });

  export default store;

3.creating our first slice in src/store/balance/slice.js:
   import { createSlice } from "@reduxjs/toolkit";
   const initialState = {
    amount: 0,
    };

    export const balanceSlice = createSlice({
    name: "balance",
    initialState,
    reducers: {},
    });

    export const {} = balanceSlice.actions;
    export default balanceSlice.reducer;

4.Add our newly created slice to our store in src/store/index.js:
    import balanceReducer from "./balance/slice";
    inside reducer function:  balance: balanceReducer

5.Integrating the store with the React app
  Change your src/index.js so that the app is wrapped with the React-Redux provider.
  import { Provider } from "react-redux";
  import store from "./store";
  <Provider store={store}>
       <App />
+    </Provider>


 Run the app again to check if it's working: npm start
 check the store and action in Redux devTool 

Dispatch Action: Sending data to the store:

1.Define a key in our newly created slice
   src/store/balance/slice.js, in reducer add a key called `deposit`
     reducers: {
       deposit: (state) => {
      // empty for now! :)
     },
  