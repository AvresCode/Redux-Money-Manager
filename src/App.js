
import { deposit, withdraw, reset } from "./store/balance/slice";
import { useDispatch, useSelector } from "react-redux";
import { selectBalance } from "./store/balance/selectors";
import { useState } from "react";


function App() {
  const dispatch = useDispatch();
  const balance = useSelector(selectBalance);
const [customAmount, setCustomAmount] = useState("")
console.log(setCustomAmount)
  return (
    <div className="App">
      <div>
      <p>Balance: {balance}$</p>
      <button
        onClick={() => {
          
          dispatch(deposit(10));
        }}
      >
        Deposit 10$
      </button>
      <button
        onClick={() => {
          dispatch(withdraw(10));
        }}
      >
        Withdraw 10$
      </button>
      <button
        onClick={() => {
          dispatch(reset());
        }}
      >
        Reset
      </button></div>
      <div> 
<input type="text"  value={customAmount}  onChange={(e) => setCustomAmount(parseInt(e.target.value))}/> $
        <button onClick={() => {dispatch(deposit(customAmount)); setCustomAmount("")}}> Deposit custom amount</button> 
      </div>
    </div>
    
  );
}

export default App;
