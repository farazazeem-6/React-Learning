import React from "react";
import Student from "./Student";

function College({ data }) {
  return (
    <div>
      {data.map((college, index) => (
        <div
          key={index}
          style={{
            backgroundColor: "#ccc",
            padding: "20px",
            margin: "10px",
            borderRadius: "10px",
          }}
        >
          <h2>College Name: {college.name}</h2>
          <h2>College City: {college.city}</h2>
          <h2>College Website: {college.website}</h2>
          
          <Student studentData={college.student} />
        </div>
      ))}
    </div>
  );
}

export default College;
