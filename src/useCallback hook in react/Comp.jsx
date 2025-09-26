import React, { memo } from "react";

// 🟢 memo -> Prevents this component from re-rendering
const ChildButton = ({ onClick }) => {
  console.log("ChildButton rendered!");
  return <button onClick={onClick}>Click Me</button>;
};

export default memo(ChildButton);
