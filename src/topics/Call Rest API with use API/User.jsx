import React from "react";
import { use } from "react";

function User({ fetchResponse }) {
  const userData = use(fetchResponse);
  //   console.log(userData.users);
  return (
    <div>
      {userData?.users?.map((user, id) => (
        <h3 key={id}>{user.firstName}</h3>
      ))}
    </div>
  );
}

export default User;
