import { useState } from "react";

const Panel = ({ title, children }) => {
  const [show, setShow] = useState(true);
  console.log(show);
  return (
    <section className="panel">
      <h3>{title}</h3>
      {show && <p>{children}</p>}
      <button onClick={() => setShow(!show)}>{show ? "Hide" : "Show"}</button>
    </section>
  );
};

export default Panel;
