import React, { useState } from "react";

const Counter = () => {
  const initCounterData = 0;
  const [counter, setCounter] = useState(initCounterData);

  const incrementHandler = () => {
    console.log("incrementHandler method has been executed");
    setCounter(counter + 1);
  };

  const decrementHandler = () => {
    console.log("decrementHandler method has been executed");
    setCounter(counter - 1);
  };

  const resetHandler = () => {
    console.log("resetHandler method has been executed");
    setCounter(initCounterData);
  };

  return (
    <div className="container">
      <h3>Counter: {counter}</h3>
      <button type="button" className="btn btn-success" onClick={incrementHandler}>Increment</button>
      <button type="button" className="btn btn-danger"  onClick={decrementHandler}>Decrement</button>
      <button type="button" className="btn btn-secondary" onClick={resetHandler}>Reset</button>
    </div>
  );
};

export default Counter;
