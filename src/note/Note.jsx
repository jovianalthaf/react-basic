import React, { useState } from "react";

const  Note = ({ note, onChange, onDelete }) => {
  const [isEditing, setIsEditing] = useState(false);
  let component;

  const handleChangeText = (e) => {
    const newNote = { ...note, text: e.target.value };
    onChange(newNote);
  };

  if (isEditing) {
    component = (
      <>
        <input type="text" value={note.text} onChange={handleChangeText} />
        <button className="ml-5" onClick={() => setIsEditing(false)}>Save</button>
      </>
    );
  } else {
    component = (
      <>
        {note.text}
        <button className="ml-5" onClick={() => setIsEditing(true)}>Edit</button>
      </>
    );
  }

  const handleChangeDone = (e) => {
    const newNote = { ...note, done: e.target.checked };
    onChange(newNote);
  };
  return (
    <div>
      <label htmlFor="">
        <input
          type="checkbox"
          checked={note.done}
          onChange={handleChangeDone}
        />
        {component}
        <button className="ml-5" onClick={() => onDelete(note)}> Delete </button>
      </label>
    </div>
  );
};

export default Note;
