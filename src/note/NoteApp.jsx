import React, { useReducer, useState } from "react";
import { useImmer, useImmerReducer } from "use-immer";
import NoteForm from "./NoteForm";
import NoteList from "./NoteList";

let id = 0;

const initialNotes = [
  {
    id: id++,
    text: "Learn HTML",
    done: false,
  },
  {
    id: id++,
    text: "Learn CSS",
    done: true,
  },
  {
    id: id++,
    text: "Learn JAVASCRIPT",
    done: false,
  },
  {
    id: id++,
    text: "Learn REACTJS",
    done: false,
  },
];
const notesReducer = (notes, action) => {
  if (action.type === "ADD_NOTE") {
    notes.push({
      id: id++,
      text: action.text,
      done: false,
    });
  } else if (action.type === "CHANGE_NOTE") {
    const index = notes.findIndex((note) => note.id === action.id);
    // notes[index] = { ...action };
    notes[index].text = action.text;
    notes[index].done = action.done;
  } else if (action.type === "DELETE_NOTE") {
    const index = notes.findIndex((note) => note.id === action.id);
    notes.splice(index, 1);
  }

  // menggunakan switch tanpa useImmer
  // switch (action.type) {
  //   case "ADD_NOTE":
  //     return [
  //       ...notes,
  //       {
  //         id: id++,
  //         text: action.text,
  //         done: false,
  //       },
  //     ];
  //   case "CHANGE_NOTE":
  //     return notes.map((note) =>
  //       note.id === action.id
  //         ? { ...note, text: action.text, done: action.done }
  //         : note
  //     );
  //   case "DELETE_NOTE":
  //     return notes.filter((note) => note.id !== action.id);
  //   default:
  //     return notes;
  // }
};
const NoteApp = () => {
  // const [notes, setNotes] = useImmer(initialNotes);
  const [notes, dispatch] = useImmerReducer(notesReducer, initialNotes);

  const handleAddNote = (text) => {
    dispatch({
      type: "ADD_NOTE",
      text: text,
    });
  };

  const handleChangeNote = (note) => {
    dispatch({
      ...note,
      type: "CHANGE_NOTE",
    });
  };

  const handleDeleteNote = (note) => {
    dispatch({
      type: "DELETE_NOTE",
      id: note.id,
    });
  };
  return (
    <div>
      <h1>Note APP</h1>
      <NoteForm onAddNote={handleAddNote} />
      <NoteList
        notes={notes}
        onChange={handleChangeNote}
        onDelete={handleDeleteNote}
      />
    </div>
  );
};

export default NoteApp;
