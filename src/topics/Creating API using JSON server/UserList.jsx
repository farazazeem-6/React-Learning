import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";

function UserList() {
  const [data, setData] = useState([]);
  const [loader, setLoader] = useState(false);

  const navigate = useNavigate();

  const API = "http://localhost:3000/users";

  useEffect(() => {
    setLoader(true);
    getData();
  }, []);

  async function getData() {
    let response = await fetch(API);
    response = await response.json();
    setData(response);
    // console.log(response);
    setLoader(false);
  }

  const deleteUser = async (id) => {
    // console.log(id);
    let response = await fetch(API + "/" + id, {
      method: "Delete",
    });
    // console.log(response);
    response = response.json();
    // if (response) {
    //   alert("User Deleted");
    //   getData();
    // }
    getData();
  };

  const editUser = (id) => {
    navigate('/edit/'+id)
  };

  return (
    <div>
      <h1>Integrating Json server API and Add & Show User</h1>
      <div className="user-container">
        <div className="user-header">
          <span>Name</span>
          <span>Age</span>
          <span>Email</span>
          <span>Action</span>
        </div>

        {!loader ? (
          data.map((user, index) => (
            <div className="user-row" key={index}>
              <span>{user.name}</span>
              <span>{user.age}</span>
              <span>{user.email}</span>
              <span>
                <button
                  onClick={() => deleteUser(user.id)}
                  className="delete-btn"
                >
                  Delete
                </button>
                <button onClick={()=>editUser(user.id)} className="edit-btn">Edit</button>
              </span>
            </div>
          ))
        ) : (
          <p className="loading">Data Loading...</p>
        )}
      </div>
    </div>
  );
}

export default UserList;
