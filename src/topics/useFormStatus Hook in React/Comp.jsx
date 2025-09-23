import React from 'react'
import { useFormStatus } from "react-dom";

  function Component() {
    const { pending } = useFormStatus();
    return (
      <div>
        <input type="text" placeholder="Enter Your Name" />
        <br />
        <br />
        <input type="pasword" placeholder="Enter Password" />
        <br />
        <br />
        <button disabled={pending}>{pending ? "Submitting" : "Submit"}</button>
      </div>
    );
  }

export default Component
