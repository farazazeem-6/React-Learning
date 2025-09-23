import React, { useState } from "react";
import "./Comp.css";

function Comp() {
  const [name, SetName] = useState();
  const [nameErr, SetNameErr] = useState();
  const [password, SetPassword] = useState();
  const [passwordErr, SetPasswordErr] = useState();

  function handleName(event) {
    // console.log(event.target.value);
    if (event.target.value.length > 5) {
      SetNameErr("Invalid Name (less then 6 char)");
    } else {
      SetNameErr("");
    }
  }
  const passRegex = /^[A-Z)0-9]+$/i;
  function handlePass(event) {
    if (event.target.value === "") {
      SetPasswordErr("");
    } else if (passRegex.test(event.target.value)) {
      SetPasswordErr("");
    } else {
      SetPasswordErr("No special char allowed");
    }
  }
  return (
    <div>
      <input
        className={nameErr ? "inp-error" : ""}
        type="text"
        onChange={handleName}
        placeholder="Enter Name"
      />
      <span className="error">{nameErr}</span>
      <br /> <br />
      <input
        className={passwordErr ? "inp-error" : ""}
        type="text"
        onChange={handlePass}
        placeholder="Enter Password"
      />
      <span className="error">{passwordErr}</span>
      <br /> <br />
      <button disabled={nameErr || passwordErr ? true : false}>Submit</button>
    </div>
  );
}

export default Comp;
