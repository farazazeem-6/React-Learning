import React, { useReducer, useState } from "react";

const initialValue = [];
const reducerFunc = (state, action) => {
  switch (action.type) {
    case "ADD_ITEM":
      return [...state, action.payload];

    case "REMOVE_ITEM":
      return state.filter((item, index) => index !== action.payload);

    case "CLEAR_CART":
      return [];

    default:
      return state;
  }
};
function CartSystem() {
  const [cart, dispatch] = useReducer(reducerFunc, initialValue);
  const [item, setItem] = useState("");
  return (
    <div>
      <h1>Cart Item System</h1>
      <input
        value={item}
        onChange={(e) => setItem(e.target.value)}
        type="text"
        placeholder="Enter Item"
      />
      <button
        onClick={() => {
          if (item.trim() === "") {
            return;
          }
          dispatch({ type: "ADD_ITEM", payload: item });
          setItem("");
        }}
      >
        Add to Cart
      </button>

      <div style={{ marginTop: "20px" }}>
        {cart.map((item, index) => (
          <li style={{ marginBottom: "20px" }} key={index}>
            Item:{item}
            <button
              style={{ marginLeft: "10px" }}
              onClick={() => dispatch({ type: "REMOVE_ITEM", payload: index })}
            >
              Remove
            </button>
          </li>
        ))}
      </div>

      {cart.length > 1 && (
        <button
          style={{ marginTop: "20px" }}
          onClick={() => dispatch({ type: "CLEAR_CART" })}
        >
          Clear Cart
        </button>
      )}
    </div>
  );
}

export default CartSystem;
