import React from "react";

function Loop() {
  const users = [
    { id: 1, name: "Ali Raza", age: 28, email: "ali.raza@example.com" },
    { id: 2, name: "Sara Khan", age: 24, email: "sara.khan@example.com" },
    { id: 3, name: "Usman Tariq", age: 31, email: "usman.tariq@example.com" },
    { id: 4, name: "Hina Malik", age: 26, email: "hina.malik@example.com" },
    { id: 5, name: "Bilal Ahmed", age: 29, email: "bilal.ahmed@example.com" },
    { id: 6, name: "Zoha Ali", age: 31, email: "zoha.ali@example.com" },
    { id: 7, name: "Zohaib Azhar", age: 19, email: "zohaib.azhar@example.com" },
  ];

  return (
    <div>
      <table border={"1"}>
        <thead>
          <tr>
            <td>Name</td>
            <td>Id</td>
            <td>Age</td>
            <td>Email</td>
          </tr>
        </thead>
        <tbody>
          {users.map((item) => (
            <tr key={item.id}>
              <td>{item.name}</td>
              <td>{item.id}</td>
              <td>{item.age}</td>
              <td>{item.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Loop;
