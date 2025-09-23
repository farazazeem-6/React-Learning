import React, { useState } from "react";

function UseState() {
  let [fruit, setFruit] = useState("Apple");
  return (
    <div>
      <h1>{fruit}</h1>
      <button onClick={() => setFruit("banana")}>Change Fruit Name</button>
    </div>
  );
}

export default UseState;
