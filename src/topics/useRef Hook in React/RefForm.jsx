import React, { useRef } from "react";

function RefForm() {
  const userInputRef = useRef(null);
  const userPasswordRef = useRef(null);

  function handleForm(e) {
    e.preventDefault();
    const userInputValue = userInputRef.current.value;
    const userPasswordValue = userPasswordRef.current.value;
    console.log(userInputValue);
    console.log(userPasswordValue);
  }
  return (
    <div>
      <form onSubmit={handleForm}>
        <input ref={userInputRef} type="text" placeholder="Enter Name" />
        <br /> <br />
        <input
          ref={userPasswordRef}
          type="password"
          placeholder="Enter Password"
        />
        <br /> <br />
        <button>Submit Now</button>
      </form>
    </div>
  );
}

export default RefForm;
