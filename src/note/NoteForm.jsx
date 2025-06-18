import React, { useContext, useState } from "react";
import { NotesDispatchContext } from "./NoteContext";

const NoteForm = () => {
  const [text, setText] = useState("");
  const dispatch = useContext(NotesDispatchContext);
  const handleChange = (e) => {
    setText(e.target.value);
  };
  const handleClick = () => {
    setText("");
    dispatch({
      type: "ADD_NOTE",
      text: text,
    });
  };
  return (
    <div style={{ marginBottom: "10px" }}>
      <input
        placeholder="Add Note"
        value={text}
        type="text"
        onChange={handleChange}
        style={{ border: "10px", borderColor: "blue" }}
      />
      <button
        className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-red-600 transition mt-5 ml-5"
        onClick={handleClick}
      >
        Add
      </button>
    </div>
  );
};

export default NoteForm;
