import React from 'react';
import useToggle from './Toggle.jsx';

function LightSwitch() {
  const [isOn, toggleLight] = useToggle();

  return (
    <div>
      <p>The light is {isOn ? 'Light is On' : 'Light is Off'}</p>
      <button onClick={toggleLight}>Toggle</button>
    </div>
  );
}

export default LightSwitch;