// import React from "react";

// function Default({ name = "User...",color='yellow' }) {
//   return (
//     <div style={{ color: color, border: "2px solid green", margin: "10px" }}>
//       <h1>Hi,{name}</h1>
//     </div>
//   );
// }

// export default Default;


import React from 'react'

function Default({children,color='yellow'}) {
  return (
    <div style={{color:color}}>
      {children}
    </div>
  )
}

export default Default
