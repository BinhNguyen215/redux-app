import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement } from './redux/actions/counterActions';

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
    <div className="container">
      <div className="row">
        <div className="col-md-6 offset-md-3">
          <h1 className="text-center">Counter: {counter}</h1>
          <div className="input-group mb-3">
            <input
              type="number"
              className="form-control"
              value={amount}
              onChange={handleAmountChange}
              placeholder="Enter amount"
            />
          </div>

          <div className="input-group-append d-flex justify-content-center gap-2">
            <button
              className="btn btn-primary"
              onClick={() => dispatch(increment(amount))}
            >
              Increment
            </button>
            <button
              className="btn btn-danger"
              onClick={() => dispatch(decrement(amount))}
            >
              Decrement
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
