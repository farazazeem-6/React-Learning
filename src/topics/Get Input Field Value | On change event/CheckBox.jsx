import React, { useState } from "react";

function CheckBox() {
  let [skill, setSkill] = useState([]);

  const check = (e) => {
    // console.log(e.target.value);
    // console.log(e.target.checked);
    if (e.target.checked) {
      setSkill([...skill, e.target.value]);
    } else {
      setSkill([...skill.filter((item) => item != e.target.value)]);
    }
  };
  return (
    <div className="checkboxes">
      <h1>Select Your Skills</h1>
      <input type="checkbox" id="php" value="PHP" onChange={check} />
      <label htmlFor="php">PHP</label>
      <br />
      <br />
      <input type="checkbox" id="js" value="JS" onChange={check} />
      <label htmlFor="js">JS</label>
      <br />
      <br />

      <input type="checkbox" id="java" value="JAVA" onChange={check} />
      <label htmlFor="java">JAVA</label>
      <br />
      <br />
      <input type="checkbox" id="python" value="PYTHON" onChange={check} />
      <label htmlFor="python">PYTHON</label>

      <h1>{skill.toString()}</h1>
    </div>
  );
}

export default CheckBox;
