import { useReducer } from "react";

const initialState = {
  count: 0,
};
const reducerFunc = (state, action) => {
  //   console.log("STATE:", state);
  //   console.log("ACTION:", action);
  switch (action.type) {
    case "Increment":
      return { count: state.count + 1 };
      break;
    case "Decrement":
      return { count: state.count - 1 };
      break;
    case "Reset":
      return { count: 0 };

    default:
      return state;
      break;
  }
};

function Comp() {
  const [state, dispatch] = useReducer(reducerFunc, initialState);
  return (
    <div>
      <button onClick={() => dispatch({ type: "Increment" })}>Increment</button>
      <button onClick={() => dispatch({ type: "Decrement" })}>Decrement</button>
      <button onClick={() => dispatch({ type: "Reset" })}>Reset</button>
      <h1>{state.count}</h1>
    </div>
  );
}

export default Comp;
