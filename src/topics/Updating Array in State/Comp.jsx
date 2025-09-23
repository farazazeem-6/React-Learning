import React, { useState } from "react";

function Comp() {
  const [data, setData] = useState(["ali", "sam", "peter"]);
  const handleName = (name) => {
    // console.log(name);
    data[data.length - 1] = name;
    setData([...data]);

    // setData([...data,name])
  };
  return (
    <div>
      <h1>Change State in Simple Array</h1>
      <input
        onChange={(e) => handleName(e.target.value)}
        type="text"
        placeholder="Enter Last Name"
      />
      {data.map((item, index) => {
        return <h3 key={index}>{item}</h3>;
      })}
    </div>
  );
}

export default Comp
