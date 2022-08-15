 npx create-react-app money-manager
 create a simple function in app.js 

//***Redux steps:
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

 //**if we make compponents and return in app.js at this stage , then we do the selectors first to see the data in our app, then we return to the dispatch action

//***Dispatch Action: Sending data to the store:

1.Define a key in our newly created slice
   src/store/balance/slice.js, in reducer add a key called `deposit`
     reducers: {
       deposit: (state) => {
      // empty for now! :)
     },
   
     export const {deposit} = balanceSlice.actions;


2&3. Import useDispatch and dispatch the action
    in app.js or any component with main codes
    import { useDispatch } from "react-redux";
    import { deposit } from "./store/balance/slice"

    add const dispatch = useDispatch() to the function App:
    function App() {
   const dispatch = useDispatch();
  
    add dispatch(deposit(10)); after/in place of setBalance
            onClick={() => {
        // setBalance(balance + 10);
         dispatch(deposit(10));
        }}

    check yourself in redux devTool:when you click action will be dispatched

//***Reducer: Intercept action and update the redux state

1.Add a console.log() inside the key in our reducer to test if everything is wired correctly, src/store/balance/slice.js:
      deposit: (state) => {
      console.log("Hello from the reducer!")
    },
   check in the devTool if you can get the console message


2.Add a logic to update the state: state.amount = state.amount + action.payload
    src/store/balance/slice.js:
    reducers: {
        deposit: (state, action) => {
         console.log("Hello from the reducer!")
         ** state.amount = state.amount + action.payload
        },
 The payload of our actions is the value (or array, or object) we pass in when dispatching an action: // in this case, in our reducer, action.payload === 10
  dispatch(deposit(10)); 


check yourself! 
 Each time we click on the Deposit 10$ button now, we should not only see our action being dispatched, but also an update to the Redux state - both in the "State" tab but also in the "Diff" tab.

//*** Selector: Get data from the store

1.Create our selector function

    // src/store/balance/selectors.js
    export const selectBalance = (reduxState) => reduxState.balance.amount;

2.Use the selector in a component:
    in App.js / or component file:
    remove import useState and useDispatch
     import { selectBalance } from "./store/balance/selectors";
     import { useDispatch, useSelector } from "react-redux";

    remove const [balance, setBalance] = useState(0); 
    add const balance = useSelector(selectBalance);
    
    Remove setBalance(balance + 10);

    Now balance will be updated every time the computed value of our selector changes. 

    We will need useState for data that concerns our UI Logic / Data rather than our Business Logic / Data.


    check yourself! Not only do we see our actions and state updates in the devtools, but now we can leverage one of Redux's cool features: time travel.
    Open the devtools and click on the white arrows in the bottom right corner. 