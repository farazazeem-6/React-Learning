import React, { useEffect, useState } from "react";

function Clock({ color }) {
  const [time, setTime] = useState(0);

  useEffect(() => {
   setInterval(() => {
      setTime(new Date().toLocaleTimeString());
    }, 1000);
    
  }, []);

  return (
    <div>
      <div
        style={{
          width: "150px",
          height: "60px",
          backgroundColor: "black",
          borderRadius: "10px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <span style={{ color: color, fontSize: "20px" }}>{time}</span>
      </div>
    </div>
  );
}

export default Clock;
