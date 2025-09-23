import React from 'react'

function Student({studentData}) {
  return (
    <div>
          <h2>Students</h2>
          {
            studentData.map((item)=> {
                return(
                    <ul>
                        <li> <span style={{fontWeight:'bold'}}>Student Name:</span> {item.name}</li>
                        <li><span style={{fontWeight:'bold'}}>Student Age:</span> {item.age}</li>
                        <li><span style={{fontWeight:'bold'}}>Student Email:</span> {item.email}</li>
                    </ul>
                )
            })
          }
    </div>
  )
}

export default Student
