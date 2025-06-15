import React, { useState } from "react";
import Counter from "./counter";

const CounterApp = () => {
  const [show2, setShow2] = useState(true);
  const handleChange = (e) => {
    setShow2(e.target.checked);
  };
  return (
    <div>
      {show2 ? <Counter name="budi" /> : <Counter name="jovian" />}
      <input type="checkbox" checked={show2} onChange={handleChange} />
      Tampilkan Counter
    </div>
  );
};

export default CounterApp;
