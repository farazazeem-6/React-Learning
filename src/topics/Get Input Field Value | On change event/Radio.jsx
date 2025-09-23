import React, { useState } from "react";

function Radio() {
  let [gender, setGender] = useState("Male");
  let [city, setCity] = useState("Lahore");

  function radioFun(e) {
    // console.log(e.target.value);
    // console.log(e.target.checked);
    if (e.target.checked) {
      setGender(e.target.value);
    }
  }
  function dropdownFun(e) {
    // console.log(e.target.value);
    setCity(e.target.value);
  }
  return (
    <div>
      <h1>Selected Gender: {gender}</h1>
      <label htmlFor="male">Male</label>
      <input
        type="radio"
        name="choice"
        id="male"
        value="Male"
        onChange={radioFun}
        checked={gender === "Male"}
      />

      <label htmlFor="female">Female</label>
      <input
        type="radio"
        name="choice"
        id="female"
        value="Female"
        onChange={radioFun}
        checked={gender === "Female"}
      />
      <hr />
      <h1>DropDown Value: {city}</h1>
      <select
        defaultValue="Lahore"
        checked={city === "Lahore"}
        name=""
        id=""
        onChange={dropdownFun}
      >
        <option value="Faisalabad">Faisalabad</option>
        <option value="Islamabad">Islamabad</option>
        <option value="Lahore">Lahore</option>
      </select>
    </div>
  );
}

export default Radio;
