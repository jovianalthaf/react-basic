import React from "react";

const TaskList = ({ items = [],onDelete}) => {
  
  return (
    <div>
      <h1>Tast List</h1>
      <ul>
        {items.map((item, index) => (
          <li key={index}>
            {item}
            <button onClick={() => onDelete(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TaskList;
