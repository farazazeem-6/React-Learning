// Use of forwardRef because react 19 version.We need to pass two paramters to the Component no matter we use both or not.And then we use the ref paramter in our input and also export the component by using forwardRef keyword 
// import React, { forwardRef, version } from 'react'

// function Comp(props,ref) {
//   return (
//     <div>
//       <input type="text" ref={ref} />
//     </div>
//   )
// }

// export default forwardRef(Comp)



// Use of forwardRef in version 19 of React


import React from 'react'

function Comp(props) {
  return (
    <div>
      <input type="text" ref={props.ref} />
    </div>
  )
}

export default Comp
