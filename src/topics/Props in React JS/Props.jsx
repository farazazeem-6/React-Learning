import React from "react";
// import User from './User'

function Props({ user }) {
  return (
    <div>
      <h1>{user.name}</h1>
      <h1>{user.age}</h1>
      <h1>{user.email}</h1>
      <hr />
    </div>
  );
}

export default Props;
