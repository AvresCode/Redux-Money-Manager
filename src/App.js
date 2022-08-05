import { useState } from "react";
import { useDispatch } from "react-redux";
import { deposit } from "./store/balance/slice"

function App() {
  const [balance, setBalance] = useState(0);
  const dispatch = useDispatch();

  return (
    <div className="App">
      <p>Balance: {balance}$</p>
      <button
        onClick={() => {
          setBalance(balance + 10);
          dispatch(deposit(10));
        }}
      >
        Deposit 10$
      </button>
    </div>
  );
}

export default App;
