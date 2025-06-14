import { useState } from "react";
import "../index.css";

const Panel = ({ title, children }) => {
  const [show, setShow] = useState(true);
  const [count, setCount] = useState(0);

  console.log(show);
  return (
    <section className="ml-10">
      <h3>{title}</h3>
      {show && <p>{children}</p>}
      <button
        className="px-4 py-2 border border-gray-300 rounded hover:bg-gray-100"
        onClick={() => setShow(!show)}
      >
        {show ? "Hide" : "Show"}
      </button>
      {count >= 10 ? (
        <h1>sudah 10</h1>
      ) : (
        <>
          <br />
          <button
            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-red-600 transition"
            onClick={() => setCount(count + 1)}
          >
            ini Count ke :{count}
          </button>
        </>
      )}
    </section>
  );
};

export default Panel;
