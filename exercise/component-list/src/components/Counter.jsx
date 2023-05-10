import React, { useState } from "react";

export default function Counter() {
  const [num, setNum] = useState(0);

  function increment() {
    setNum(num + 1);
    setNum((prevNum) => prevNum + 1);
  }
  function decrement() {
    setNum(num - 1);
    setNum((prevNum) => prevNum - 1);
  }
  return (
    <div>
      <h2>Counter: {num}</h2>
      <button
        onClick={increment}
        type="button"
      >
        +1
      </button>
      <button
        onClick={decrement}
        type="button"
      >
        -1
      </button>
    </div>
  );
}
