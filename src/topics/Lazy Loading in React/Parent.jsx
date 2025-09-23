// import React, { lazy, Suspense, useState } from "react";
// import User from "./User";
// // const User = lazy(() => import("./topics/Lazy Loading in React/User"));
// function Parent() {
//   const [state, setState] = useState(false);
//   return (
//     <div>
//       <h1>Lazy Loading</h1>
//       <button onClick={() => setState(!state)}>Click</button>
//       {state ? (
//         <Suspense>
//           <User />
//         </Suspense>
//       ) : null}

//       {/* {
//         state? <User/>:null
//       } */}
//     </div>
//   );
// }

// export default Parent;

import React, { Suspense } from "react";
import { lazy } from "react";
// import User_2 from './User_2'
const Para = lazy(() => import("./User_2"));

function Parent() {
  return (
    <div>
      <Suspense fallback={<div>Text Loading...</div>}>
        <Para />
      </Suspense>
    </div>
  );
}

export default Parent;
