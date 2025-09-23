import React, { useState } from "react";

// function ToggleDisplay() {
//   let [display, setDisplay] = useState(true);

//   return (
//     <div>
//       {display ? <h1>Faraz Azeem</h1> : <h1>No user name</h1>}
//       <button onClick={() => setDisplay(!display)}>Change State</button>
//     </div>
//   );
// }

// export default ToggleDisplay;

//++++++++++++++++++++++++++++++++++++++++

// export function ToggleText() {
//   let [greeting, Setgretting] = useState(true);
//   return (
//     <>
//       <h1>{greeting ? "Hello" : "Goodbye"}</h1>
//       <button onClick={() => Setgretting(!greeting)}>Greetings</button>
//     </>
//   );
// }

//++++++++++++++++++++++++++++++++++++++++

// export function InputTracker() {
//   let [text, setText] = useState("");
//   return (
//     <>
//       <p>Live Input Program</p>

//       <input
//         type="text"
//         name=""
//         id=""
//         value={text}
//         onChange={(e) => setText(e.target.value)}
//       />
//       <p>Live Text:{text}</p>
//     </>
//   );
// }

//++++++++++++++++++++++++++++++++++++++++

export function MultipleConditions() {
  let [count, setCount] = useState(0);
  return (
    <>
      <p>{count}</p>
      <button onClick={() => setCount(count + 1)}>Click me </button>
      <p>
        {count == 0
          ? "Condition 0"
          : count == 1
          ? "Condition 1"
          : count == 2
          ? "Condition 2"
          : count == 3
          ? "Condition 3"
          : count == 4
          ? "Condition 4"
          : count == 5
          ? "Condition 5"
          : null}
      </p>
    </>
  );
}
