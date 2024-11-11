import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement } from './actions/counterActions';

function App() {
  const counter = useSelector((state) => state.counter);
  const dispatch = useDispatch();

  const [value, setValue] = useState(0);
  const [amount, setAmount] = useState(1);

  const handleValueChange = (e) => {
    setValue(parseInt(e.target.value));
  };

  const handleAmountChange = (e) => {
    setAmount(parseInt(e.target.value));
  };

  return (
    <div>
      <h1>Counter {counter}</h1>
      <input
        type="number"
        value={amount}
        onChange={handleAmountChange}
        placeholder="Enter amount"
      />
      <button onClick={() => dispatch(increment(amount))}>Increment</button>
      <button onClick={() => dispatch(decrement(amount))}>Decrement</button>
    </div>
  );
}

export default App;
