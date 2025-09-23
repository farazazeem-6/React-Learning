//NOTE: I HAVE STARRED A MESSAGE IN CLAUD AI WHERE WE HAVE ALL THE EXPLANATION OF THIS CODE THAT HOW THE NESTED OBJECTS LOGIC WORKS HERE.YOU CAN CHECK THE EXPLANTION BY GOING IN CLAUD AI STARRED MESSAGES.

import React, { useState } from "react";

function App() {
  const [data, setData] = useState({
    name: "Ali",
    address: {
      city: "Lahore",
      country: "Pakistan",
    },
  });

  const handleName = (name) => {
    data.name = name;
    setData({...data})
  };


  const handleCity = (city) => {
    data.address.city = city;
    setData({...data,address:{...data.address,city}})
  };


  const handleCountry = (country) => {
    data.address.country = country;
    setData({...data,address:{...data.address,country}})
  };


  return (
    <div>
      <input
        onChange={(e) => handleName(e.target.value)}
        type="text"
        placeholder="Enter Name"
      />
      <br />
      <br />
      <input
        onChange={(e) => handleCity(e.target.value)}
        type="text"
        placeholder="Enter City"
      />
      <br /> 
      <br />
      <input
        onChange={(e) => handleCountry(e.target.value)}
        type="text"
        placeholder="Enter Country"
      />
      <br />
      <br />
      <h1>Name:{data.name}</h1>
      <h1>City:{data.address.city}</h1>
      <h1>Country:{data.address.country}</h1>
    </div>
  );
}

export default App;
