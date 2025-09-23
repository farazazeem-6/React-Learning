import React, { useState } from "react";
import "./Input.css";

function Input() {
  let [name, setName] = useState("");
  let [password, setpassword] = useState("");
  let [email, setemail] = useState("");
  return (
    <div>
      <form action="">
        <input
          type="text"
          placeholder="Enter Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="password"
          placeholder="Enter password"
          value={password}
          onChange={(e) => setpassword(e.target.value)}
        />
        <input
          type="email"
          placeholder="Enter email"
          value={email}
          onChange={(e) => setemail(e.target.value)}
        />
      </form>
      <h1>{name}</h1>
      <h1>{email}</h1>
      <h1>{password}</h1>

      <button onClick={()=>{alert('Submitted');setName('');setpassword('');setemail('')}}>Submit</button>
      <button onClick={()=>{setName('');setpassword('');setemail('')}}>Clear</button>

    </div>
  );
}

export default Input;
