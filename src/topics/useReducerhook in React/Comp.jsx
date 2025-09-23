import React, { useReducer } from "react";

const initialValue = {
  name: "",
  email: "",
  password: "",
  city: "",
  address: "",
};
const reducer = (data, action) => {
  //   console.log("Data:", data);
  //   console.log("Action:", action);
  //   return { ...data, [action.type]: action.val };

  switch (action.type) {
    case "ADD_DATA":
      return {
        ...data,
        [action.payload.field]: action.payload.value,
      };

    default:
      return data;
  }
};
function Comp() {
  const [state, dispatch] = useReducer(reducer, initialValue);

  const handleDispatch = (e) => {
    dispatch({
      type: "ADD_DATA",
      payload: {
        field: e.target.name,
        value: e.target.value,
      },
    });
  };
  return (
    <div>
      <h1>UseReducer Hook in React</h1>
      <input
        name="name"
        type="text"
        onChange={handleDispatch}
        placeholder="Enter You Name"
      />
      <br /> <br />
      <input
        name="email"
        type="text"
        onChange={handleDispatch}
        placeholder="Enter You Email"
      />
      <br /> <br />
      <input
        name="password"
        type="text"
        onChange={handleDispatch}
        placeholder="Enter You Password"
      />
      <br /> <br />
      <input
        name="city"
        type="text"
        onChange={handleDispatch}
        placeholder="Enter You City"
      />
      <br /> <br />
      <input
        name="address"
        type="text"
        onChange={handleDispatch}
        placeholder="Enter You Address"
      />
      <br /> <br />
      <h2>Name: {state.name}</h2>
      <h2>Password: {state.password}</h2>
      <h2>Email: {state.email}</h2>
      <h2>State: {state.city}</h2>
      <h2>Address: {state.address}</h2>
    </div>
  );
}

export default Comp;
