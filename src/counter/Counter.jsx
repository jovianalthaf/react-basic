import { useState } from "react";

const Counter = ({ name }) => {
  const [count, setCount] = useState(0);
  const handleClick = () => {
    setCount(count + 1);
  };
  return (
    <div className="ml-5">
      {/* <button onClick={() => setCount(count + 1)}>Counter Ke : {count}</button> */}
      <h1>
        Counter {name} ke {count}
      </h1>

      <button
        className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-red-600 transition mt-5"
        onClick={handleClick}
      >
        Increments
      </button>
    </div>
  );
};

export default Counter;
