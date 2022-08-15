
import { deposit } from "./store/balance/slice";
import { useDispatch, useSelector } from "react-redux";
import { selectBalance } from "./store/balance/selectors";
import { withdraw } from "./store/balance/slice";
import { reset } from "./store/balance/slice";

function App() {
  const dispatch = useDispatch();
  const balance = useSelector(selectBalance);

  return (
    <div className="App">
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
      </button>
    </div>
  );
}

export default App;
