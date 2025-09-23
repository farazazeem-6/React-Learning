import React from "react";
import styled from "styled-components";

function StyledComp() {
  const Heading = styled.h1`
    color: green;
    background-color: #ccc;
  `;

  const Para=styled.p({
    color:'yellowgreen',
    backgroundColor:'blue',
    fontSize:'2rem',

  })

  return (
    <div>
      <Heading>Hello World</Heading>
      <Heading>Hello World 1</Heading>
      <Para>This is paragraph</Para>
    </div>
  );
}

export default StyledComp;
