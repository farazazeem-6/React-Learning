import React, { useEffect, useState } from "react";

function Pure() {
  const [state, setState] = useState(0);

  return (
    <div>
      <button onClick={()=>setState(state+1)}>Click</button>
      <h1>{state}</h1>
    </div>
  );
}

export default Pure;
