import React, { useState } from "react";

function useToggle(defaultValue) {

    //here we get that custom hook
  const [value, setValue] = useState(defaultValue);

  function toggleValue(val) {
    if (typeof val != "boolean") {
      setValue(!value);
    } else {
      setValue(val);
    }
  }
  return [value, toggleValue];
}

export default useToggle;
