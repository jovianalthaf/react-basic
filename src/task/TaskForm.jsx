import React, { useState } from "react";

const TaskForm = ({ onSubmit }) => {
  const [item, setItem] = useState("");

  const handleChange = (e) => {
    setItem(e.target.value);
  };

  const handleClick = (e) => {
    e.preventDefault();
    if (item.trim() != "") {
      onSubmit(item);
      setItem("");
    }
  };

  return (
    <div>
      <form action="">
        <input type="text" value={item} onChange={handleChange} />
        <button onClick={handleClick}>Add</button>
        <br />
      </form>
    </div>
  );
};

export default TaskForm;
