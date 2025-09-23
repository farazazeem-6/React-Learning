import React from "react";

function Parent({ displayName,name, displayUser }) {
  return (
    <div>
      <button onClick={()=>displayName(name)} style={{ cursor: "pointer" }}>Display Name</button>
      <button onClick={()=>displayUser()} style={{ cursor: "pointer" }}>Display User</button>
    </div>
  );
}

export default Parent;