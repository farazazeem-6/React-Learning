import React, { useState } from "react";

function Arr() {
  const [dataDetail, setDataDetail] = useState([
    { name: "peter", age: 22 },
    { name: "sam", age: 28 },
    { name: "john", age: 25 },
  ]);

  function handleAge(age) {
    dataDetail[dataDetail.length - 1].age = age;
    setDataDetail([...dataDetail]);
  }

  return (
    <div>
      <h1>Change State in Array of Objects</h1>
      <input
        onChange={(e) => handleAge(e.target.value)}
        type="text"
        placeholder="Enter last user age"
      />

      {dataDetail.map((item, index) => (
        <h3 key={index}>
          {item.name},{item.age}
        </h3>
      ))}
    </div>
  );
}

export default Arr;
