// import React, { useId } from "react";
// function Comp() {
//   const name = useId();
//   const password = useId();
//   const skill = useId();
//   const id = useId();

//   let array=['sam','john','peter']
//   return (
//     <div>
//       <h1>{name}</h1>
//       <h1>{password}</h1>
//       <h1>{skill}</h1>
//       <h1>{id}</h1>

//       {
//         array.map((item)=>
//         <h3 key={useId()}>{item}</h3>
//         )
//       }
//     </div>
//   );
// }

// export default Comp;

import React, { useId } from "react";

function Comp() {
  const id = useId();
  return (
    <div>
      <form action="">
        <label htmlFor={id + "name"}>Enter Name:</label>
        <input id={id + "name"} type="text" placeholder="Enter Name" />
        <br /> <br />
        <label htmlFor={id + "password"}>Enter Password:</label>
        <input
          id={id + "password"}
          type="password"
          placeholder="Enter Password"
        />
        <br /> <br />
        <label htmlFor={id + "skill"}>Enter Skill:</label>
        <input id={id + "skill"} type="text" placeholder="Enter Skill" />
      </form>
    </div>
  );
}

export default Comp;
