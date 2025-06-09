import React, { useState } from "react";

const Counter = () => {
  let [counter, setCounter] = useState(0);
  let [name, setName] = useState("");
  console.info(`Render Counter`);
  const handleClick = () => {
    setCounter(counter + 1);

    console.log(counter);
  };
  const handleDecrement = () => {
    if (counter <= 0) {
      return 0;
    }
    setCounter(counter - 1);

    console.log(counter);
  };

  const handleName = () => {
    setName("Jovian");
  };

  return (
    <div>
      <div>
        <button onClick={handleClick}>Increment</button>
        <button onClick={handleDecrement}>Decrement</button>
        <button onClick={handleName}>Your Name</button>
      </div>
      <h1>Counter : {counter}</h1>
      <h1>Name : {name}</h1>
    </div>
  );
};

export default Counter;
