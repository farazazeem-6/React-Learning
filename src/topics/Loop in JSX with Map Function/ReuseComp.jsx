import React from "react";
import './Comp.css'
function User({user}) {
  return (
    <div className="MainDiv">
      <h3 style={{ color: "green" }}>Name: {user.name}</h3>
      <h3 style={{ color: "red" }}>Id: {user.id}</h3>
      <h3 style={{ color: "pink" }}>Age: {user.age}</h3>
      <h3 style={{ color: "blue" }}>Email: {user.email}</h3>
     
    </div>
  );
}

export default User;
