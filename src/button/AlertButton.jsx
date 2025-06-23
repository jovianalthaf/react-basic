import { useRef } from "react";

export const AlertButton = ({ text, message }) => {
  const counter = useRef(0);
  const handleClick = () => {
    alert(`${message} ${counter.current++}`);
  };

  return <button onClick={handleClick} className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-red-600 transition mt-5">{text}</button>;
};
