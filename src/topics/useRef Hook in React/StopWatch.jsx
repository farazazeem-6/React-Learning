import React, { useRef, useState } from "react";

function StopWatch() {
  const [seconds, setSeconds] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [hours, setHours] = useState(0);

  const formatTime = (time) => (time < 10 ? `0${time}` : time);

  const ref = useRef(null);
  function startTimer() {
    if (ref.current !== null) return; // Prevent multiple intervals

    ref.current = setInterval(() => {
      setSeconds((prevSeconds) => {
        if (prevSeconds === 59) {
          setMinutes((prevMinutes) => {
            if (prevMinutes === 59) {
              setHours((prevHours) => prevHours + 1);
              return 0; // Reset minutes to 0
            }
            return prevMinutes + 1;
          });
          return 0; // Reset seconds to 0
        }
        return prevSeconds + 1;
      });
    }, 1000);
  }
  function stopTimer() {
    clearInterval(ref.current);
    ref.current = null;
  }
  function resetTimer() {
    stopTimer();
    setSeconds(0);
    setMinutes(0);
    setHours(0);
  }

  return (
    <div>
      <h1>Stop Watch</h1>
      <h3>
        {formatTime(hours)}:{formatTime(minutes)}:{formatTime(seconds)}
      </h3>
      <button onClick={startTimer}>Start</button>
      <button onClick={stopTimer}>Stop</button>
      <button onClick={resetTimer}>Reset</button>
    </div>
  );
}

export default StopWatch;
