import React, { useState } from "react";
import Panel from "./Panel";

const Accordition = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  return (
    <div>
      <h1>Almaty, Kazakhstan</h1>
      <Panel
        title="About"
        isActive={activeIndex === 0}
        onShow={() => setActiveIndex(0)}
      >
        ini panel index 0
      </Panel>

      <Panel
        title="About"
        isActive={activeIndex === 1}
        onShow={() => setActiveIndex(1)}
      >
        ini panel index 1
      </Panel>
    </div>
  );
};

export default Accordition;
