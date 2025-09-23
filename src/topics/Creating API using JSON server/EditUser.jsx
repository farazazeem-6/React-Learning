import React from "react";
import { useNavigate, useParams } from "react-router";
import { useState } from "react";
import { useEffect } from "react";

function EditUser() {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [email, setEmail] = useState("");
  const { id } = useParams();

  useEffect(() => {
    const fetchUser = async () => {
      let response = await fetch(`${API}/${id}`);
      let user = await response.json();
      setName(user.name);
      setAge(user.age);
      setEmail(user.email);
    };

    fetchUser();
  }, [id]);

  const API = "http://localhost:3000/users";
  async function editUser(id) {
    let response = await fetch(API + "/" + id, {
      method: "Put",
      body: JSON.stringify({ name, age, email }),
    });
    response = await response.json();
    if (response) {
      alert("User Updated");
    }
    setName("");
    setAge("");
    setEmail("");

    navigate("/");
  }
  return (
    <div>
      <h1>Edit User Details</h1>
      <input
        value={name}
        onChange={(e) => setName(e.target.value)}
        type="text"
        placeholder="User Name"
      />
      <br /> <br />
      <input
        value={age}
        onChange={(e) => setAge(e.target.value)}
        type="text"
        placeholder="User Age"
      />
      <br /> <br />
      <input
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        type="text"
        placeholder="User Email"
      />
      <br /> <br />
      <button onClick={() => editUser(id)}>Update Details</button>
    </div>
  );
}

export default EditUser;
