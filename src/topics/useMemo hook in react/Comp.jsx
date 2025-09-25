import React, { useState, useMemo } from "react";

function WithUseMemo() {
  const [count, setCount] = useState(0);

  function expensiveCalculation(num) {
    console.log("Calculating...");
    for (let i = 0; i < 1000000000; i++) {}
    return num * 2;
  }

  const memoizedResult = useMemo(() => expensiveCalculation(10), []);

  return (
    <div>
      <h2>Count: {count}</h2>
      <p>Result: {memoizedResult}</p>
      <button onClick={() => setCount(count + 1)}>Increment Count</button>
    </div>
  );
}

export default WithUseMemo;