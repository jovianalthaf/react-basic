import React, { useRef, useState, useEffect } from "react";
import AutoFocusInput from "./AutoFocusInput.jsx";
const Timer = () => {
  const [start, setStart] = useState(null);
  const [now, setNow] = useState(null);
  const timer = useRef(null);
  const input = useRef(null);
  const handleStart = () => {
    setStart(Date.now());
    setNow(Date.now());

    timer.current = setInterval(() => {
      setNow(Date.now());
    }, 10);
  };

  const handleStop = () => {
    clearInterval(timer.current);
  };

  const handleInput = () => {
    input.current.focus();
  };
  return (
    <div>
      <h1>Timer: {((now - start) / 1000).toFixed(2)} detik</h1>
      <h2>ini now {now}</h2>
      <h2>{start}</h2>
      <button onClick={handleStart}>Start</button>
      <button onClick={handleStop}>Stop</button>

      <input
        ref={input}
        style={{
          border: "2px solid",
          margin: "10px",
        }}
        type="text"
        placeholder="Tulis disini"
      />
      <button
        onClick={handleInput}
        style={{
          backgroundColor: "white",
          color: "black",
          border: "1px solid #ccc",
          padding: "6px 12px",
          fontSize: "14px",
          userSelect: "none",
        }}
      >
        Fokuskan input
      </button>
      <AutoFocusInput></AutoFocusInput>
    </div>
  );
};

export default Timer;
