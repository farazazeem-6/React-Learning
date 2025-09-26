import React from "react";
import { useCallback, useState } from "react";
import ChildButton from "../useCallback hook in react/Comp";

function Parent() {
  const [count, setCount] = useState(0);

  // ✅ useCallback memoizes this function
  const handleClick = useCallback(() => {
    console.log("Button clicked!");
  }, []);

  return (
    <div style={{ padding: "20px" }}>
      <h2>Count: {count}</h2>
      <button onClick={() => setCount(count + 1)}>Increment Count</button>

      {/* Child button uses memoized callback */}
      <ChildButton onClick={handleClick} />
    </div>
  );
}

export default Parent;
