import React, { useState, useEffect } from "react";

function Timer() {
  const [count, setCount] = useState(0);
  const [sec, setSec] = useState(0);

  useEffect(() => {
    const timeInterval = setInterval(() => {
      console.log("Interval Started");
      setSec((prev) => prev + 1);
    }, 1000);

    return () => {
      console.log("Time to Stop!");
      clearInterval(timeInterval);
    };
  }, []);

  return (
    <div>
      <h2>Timer:{sec}</h2>
      <h2>{count}</h2>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}

export default Timer;
