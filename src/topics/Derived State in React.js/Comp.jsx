import React, { useState } from "react";

function Comp() {
  const [singleUser, setSingleUser] = useState("");
  const [allUsers, setallUsers] = useState([]);
  const handleUsers = () => {
    setallUsers([...allUsers, singleUser]);
  };
  //   console.log(allUsers);

  const total = allUsers.length;
  const lastUser = allUsers[allUsers.length - 1];
  const unique = [...new Set(allUsers)].length;

  return (
    <div>
      <h1>Total Users:{total}</h1>
      <h1>Last User:{lastUser}</h1>
      <h1>Unique Users:{unique}</h1>
      <input
        type="text"
        onChange={(e) => setSingleUser(e.target.value)}
        placeholder="Enter your name"
      />
      <br /> <br />
      <button onClick={() => handleUsers()}>Add User</button>
      {allUsers.map((item, index) => (
        <div key={index}>
          <h1>{item}</h1> <hr />
        </div>
      ))}
    </div>
  );
}

export default Comp;
