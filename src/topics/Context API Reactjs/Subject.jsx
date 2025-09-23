import React, { useContext } from "react";
import { SubjectContext } from "../../ContextComponent";

function Subject() {

  const subject=useContext(SubjectContext)
  return (
    <div style={{ backgroundColor: "green", padding: "10px" }}>
      <h1>Subject is : {subject}</h1>
    </div>
  );
}

export default Subject;
