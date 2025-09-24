import React, { useState } from "react";

function Comp() {
  const colors = JSON.parse(localStorage.getItem('color'))
  const [red, setRed] = useState(colors && colors.red ? colors.red : 0);
  const [green, setGreen] = useState(colors && colors.blue ? colors.red : 0);
  const [blue, setBlue] = useState(colors && colors.blue ? colors.blue : 0);

  const saveColor = () => {
    localStorage.setItem("color", JSON.stringify({ red, green, blue }));
  };
  return (
    <div>
      <div
        style={{
          height: "150px",
          width: "150px",
          backgroundColor: `rgb(${red},${green},${blue})`,
        }}
      ></div>
      <h1>rgb:{`${red},${green},${blue}`}</h1>
      <label htmlFor="">Red</label>
      <input
        value={red}
        type="range"
        onChange={(e) => setRed(e.target.value)}
        min={0}
        max={255}
      />
      <br />
      <label htmlFor="">Green</label>
      <input
        value={green}
        type="range"
        onChange={(e) => setGreen(e.target.value)}
        min={0}
        max={255}
      />
      <br />
      <label htmlFor="">Blue</label>
      <input
        value={blue}
        type="range"
        onChange={(e) => setBlue(e.target.value)}
        min={0}
        max={255}
      />
      <br />
      <button onClick={saveColor}>Save Color</button>
    </div>
  );
}

export default Comp;
