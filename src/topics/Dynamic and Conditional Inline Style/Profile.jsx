// import React, { useState } from "react";

// const ProfileCard = () => {
//   let [theme, setTheme] = useState({
//     width: "200px",
//     height: "auto",
//     border: "1px solid #ccc",
//     borderRadius: "8px",
//     padding: "16px",
//     textAlign: "center",
//     fontFamily: "Arial, sans-serif",
//     boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
//     margin: "20px 10px",
//   });
  

//   let [display, setDisplay] = useState();
//   function updateDisplay() {
//     setDisplay({display:'flex',flexWrap:'wrap'})
//   }
//   function defaultDisplay() {
//     setDisplay({display:'flex',flexWrap:'wrap',flexDirection:'column'})
//   }

//   function updateTheme(bgColor, textColor) {
//     setTheme({ ...theme, backgroundColor: bgColor, color: textColor });
//   }
//   function defaultTheme(bgColor, textColor) {
//     setTheme({ ...theme, backgroundColor: bgColor, color: textColor });
//   }

//   return (
//     <div>
//       <button onClick={() => updateTheme("grey", "red")}>Change Theme</button>
//       <button onClick={() => updateTheme("white", "black")}>
//         Default Theme
//       </button>
//       <button onClick={()=>updateDisplay()}>Grid Display</button>
//       <button onClick={()=>defaultDisplay()}>Default Display</button>


//       <div style={display}>

//       <div style={theme}>
//         <img
//           src="https://images.unsplash.com/photo-1654110455429-cf322b40a906?q=80&w=580&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
//           alt="Profile"
//           style={{
//             width: "100%",
//             height: "200px",
//             borderRadius: "8px",
//             marginBottom: "12px",
//           }}
//         />
//         <h2
//           style={{
//             fontSize: "18px",
//             margin: "0 0 8px 0",
//             // color: "#333",
//           }}
//         >
//           John Doe
//         </h2>
//         <p
//           style={{
//             fontSize: "14px",
//             margin: "0",
//             // color: "#777",
//           }}
//         >
//           Software Engineer
//         </p>
//       </div>
//       <div style={theme}>
//         <img
//           src="https://images.unsplash.com/photo-1619895862022-09114b41f16f?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
//           alt="Profile"
//           style={{
//             width: "100%",
//             height: "200px",
//             borderRadius: "8px",
//             marginBottom: "12px",
//           }}
//         />
//         <h2
//           style={{
//             fontSize: "18px",
//             margin: "0 0 8px 0",
//             // color: "#333",
//           }}
//         >
//           John Doe
//         </h2>
//         <p
//           style={{
//             fontSize: "14px",
//             margin: "0",
//             // color: "#777",
//           }}
//         >
//           Software Engineer
//         </p>
//       </div>
//       <div style={theme}>
//         <img
//           src="https://media.istockphoto.com/id/1386479313/photo/happy-millennial-afro-american-business-woman-posing-isolated-on-white.webp?a=1&b=1&s=612x612&w=0&k=20&c=OnzQRmrTWj779-DI4_aEykdTKuwL-Ubphs1cdQ3tyxE="
//           alt="Profile"
//           style={{
//             width: "100%",
//             height: "200px",
//             borderRadius: "8px",
//             marginBottom: "12px",
//           }}
//         />
//         <h2
//           style={{
//             fontSize: "18px",
//             margin: "0 0 8px 0",
//             // color: "#333",
//           }}
//         >
//           John Doe
//         </h2>
//         <p
//           style={{
//             fontSize: "14px",
//             margin: "0",
//             // color: "#777",
//           }}
//         >
//           Software Engineer
//         </p>
//       </div>
//     </div>
//       </div>
//   );
// };

// export default ProfileCard;






// ProfileCard.jsx
import React from "react";

const ProfileCard = ({ name, role, image, theme }) => {
  return (
    
    <div style={theme}>
      <img
        src={image}
        alt="Profile"
        style={{
          width: "100%",
          height: "auto",
          borderRadius: "8px",
          marginBottom: "12px",
        }}
      />
      <h2 style={{ fontSize: "18px", margin: "0 0 8px 0" }}>{name}</h2>
      <p style={{ fontSize: "14px", margin: "0" }}>{role}</p>
    </div>
  );
};

export default ProfileCard;
