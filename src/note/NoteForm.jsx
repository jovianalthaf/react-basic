import React, { useState } from "react";

const NoteForm = ({ onAddNote }) => {
  const [text, setText] = useState("");
  const handleChange = (e) => {
    setText(e.target.value);
  };
  const handleClick = () => {
    setText("");
    onAddNote(text);
  };
  return (
    <div>
      <input
        placeholder="Add Note"
        value={text}
        type="text"
        onChange={handleChange}
      />
      <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-red-600 transition mt-5 ml-5" onClick={handleClick}>Add</button>
    </div>
  );
};

export default NoteForm;
