import React, { useState } from "react";
import { useNavigate } from "react-router";

function AddUser() {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [email, setEmail] = useState("");

  const createUser = async () => {
    // console.log(name, age, email);
    const url = "http://localhost:3000/users";
    let response = await fetch(url, {
      method: "Post",
      body: JSON.stringify({ name, age, email }),
    });
    response = await response.json();
    if (response) {
      alert("New User Added");
    }
    navigate("/");
    setName("");
    setAge("");
    setEmail("");
  };
  return (
    <div>
      <h1>Add New User</h1>
      <input
        value={name}
        type="text"
        onChange={(e) => setName(e.target.value)}
        placeholder="Enter Your Name"
      />
      <br /> <br />
      <input
        value={age}
        type="text"
        onChange={(e) => setAge(e.target.value)}
        placeholder="Enter Your Age"
      />
      <br /> <br />
      <input
        value={email}
        type="text"
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Enter Your Email"
      />
      <br /> <br />
      <button onClick={() => createUser()}>Add User</button>
    </div>
  );
}

export default AddUser;
