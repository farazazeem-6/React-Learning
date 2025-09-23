import React, { useEffect, useState } from "react";

function Comp() {
  const [data, setData] = useState([]);
  const [loader, setLoader] = useState(false);
  useEffect(() => {
    setLoader(true)
    getData();
  }, []);

  async function getData() {
    const API = "https://dummyjson.com/users";
    // const API = "http://localhost:3000/users";
    let response = await fetch(API);
    response = await response.json();
    setData(response.users);
    // setData(response);
    // console.log(response);
    
    setLoader(false)
  }

  return (
    <div>
      {!loader
        ? data.map((user, index) => (
            <ul key={index}>
              <li>Name: {user.firstName}</li>
              <li>Age: {user.age}</li>
              <li>Gender: {user.gender}</li>
              <li>Email: {user.email}</li>
              {/* <li>Name:{user.name}</li>
              <li>Age:{user.age}</li>
              <li>Email:{user.email}</li> */}
              <hr />
            </ul>
          ))
        : "Data Loading..."}
    </div>
  );
}

export default Comp;
