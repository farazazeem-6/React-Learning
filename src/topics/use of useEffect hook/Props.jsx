import React, { useEffect } from "react";

function PropsUseEffect({ count, data }) {
  const fun1 = () => {
    console.log("Fun-1 called");
  };
  const fun2 = () => {
    console.log("Fun-2 called");
  };

  useEffect(() => {
    fun1();
  }, [count]);

  useEffect(() => {
    fun2();
  }, []);

  return (
    <div>
      <h1>Counter Value: {count}</h1>
      <h1>Data Value: {data}</h1>
    </div>
  );
}

export default PropsUseEffect;
