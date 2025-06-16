import React from "react";
import Note from "./Note";

const NoteList = ({ notes, onChange, onDelete }) => {
  return (
    <div>
      <ul>
        {notes.map((note) => (
          <li key={note.id}>
            <Note note={note} onChange={onChange} onDelete={onDelete} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default NoteList;
