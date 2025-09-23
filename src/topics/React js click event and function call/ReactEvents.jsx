import React from "react";

function Alert() {
  alert("Alert Message Outer!");
}

function ReactEvents() {
  function Alert() {
    alert("Alert Message Inner!");
  }

  function fruit(name) {
    alert(name);
  }

  return (
    <div>
      <button onClick={()=>fruit('banana')}>Click Me</button>
    </div>
  );
}

export default ReactEvents;
