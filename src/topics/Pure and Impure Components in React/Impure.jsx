import React from 'react'


let count=0
function Count() {
  count=count+1
  return(
    <div>
       <h1>Count Value: {count}</h1>
    </div>
   
  )
    
}
export default Count
