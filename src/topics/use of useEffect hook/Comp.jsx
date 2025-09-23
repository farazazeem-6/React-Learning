import React, { useEffect, useState } from "react";

function Comp() {
  const [counter, setCounter] = useState(0);
  const [data, setData] = useState(0);

  useEffect(() => {
    callback1();
  }, [counter]);

  useEffect(() => {
    callback2();
  }, [data]);

  function callback1() {
    console.log("I am the callback function 1");
  }
  function callback2() {
    console.log("I am the callback function 2");
  }

  return (
    <div>
      <h1>Counter: {counter}</h1>
      <h1>Data: {data}</h1>
      <button onClick={() => setCounter(counter + 1)}>Counter</button>
      <button onClick={() => setData(data + 1)}>Data</button>
    </div>
  );
}

export default Comp;
