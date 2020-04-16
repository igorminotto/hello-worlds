import React from "react";
import { useCounter } from "../hooks/counterHooks";

function Counter() {
  const { counter, increment, decrement } = useCounter();

  return (
    <div>
      <button onClick={increment}>+</button>
      <h2>Count: {counter}</h2>
      <button onClick={decrement}>-</button>
    </div>
  );
}

export default Counter;
