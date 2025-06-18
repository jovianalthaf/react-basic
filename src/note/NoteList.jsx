import React, { useContext } from "react";
import Note from "./Note";
import { NotesContext } from "./NoteContext";

const NoteList = () => {
  const notes = useContext(NotesContext);
  return (
    <div>
      <ul>
        {notes.map((note) => (
          <li key={note.id}>
            <Note note={note} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default NoteList;
