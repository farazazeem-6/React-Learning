import React, { useState } from "react";

function Counter() {
  let [counter, Setcounter] = useState(0);
  return (
    <div>
      <h1>Counter:{counter}</h1>
      <button onClick={() => Setcounter(++counter)}>Counter increase</button>
      <button onClick={() => Setcounter(--counter)}>Counter decrease</button>
    </div>
  );
}

export default Counter;



