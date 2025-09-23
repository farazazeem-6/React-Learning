import React from "react";

function Form() {

  function handleForm(e) {
    e.preventDefault();
    const user=document.querySelector('#user').value
    const password=document.querySelector('#password').value
    console.log(user);
    console.log(password);
    
  }
  return (
    <div>
      <form onSubmit={handleForm}>
        <input type="text" id="user" placeholder="Enter Name" />
        <br /> <br />
        <input type="password" id="password" placeholder="Enter Password" />
        <br /> <br />
        <button>Submit Now</button>
      </form>
    </div>
  );
}

export default Form;
