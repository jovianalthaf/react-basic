import React, { useContext, useState } from "react";
import { NotesDispatchContext } from "./NoteContext";

const Note = ({ note }) => {
  const [isEditing, setIsEditing] = useState(false);
  const dispatch = useContext(NotesDispatchContext);

  let component;

  const handleChangeText = (e) => {
    console.log(e.target.value);
    dispatch({
      ...note,
      type: "CHANGE_NOTE",
      text: e.target.value,
    });
  };
  // isEditing = false
  if (isEditing) {
    component = (
      <>
        <input type="text" value={note.text} onChange={handleChangeText} />
        <button className="ml-5" onClick={() => setIsEditing(false)}>
          Save
        </button>
      </>
    );
    // isEditing = true
  } else {
    component = (
      <>
        {note.text}
        <button className="ml-5" onClick={() => setIsEditing(true)}>
          Edit
        </button>
      </>
    );
  }

  const handleChangeDone = (e) => {
    console.log(e.target.checked); // tetap menampilkan true/false
    console.log(e.target.value); // tetap menampilkan true/false

    dispatch({
      ...note,
      type: "CHANGE_NOTE",
      done: e.target.checked,
    });
  };

  const handleDelete = () => {
    dispatch({
      type: "DELETE_NOTE",
      id: note.id,
    });
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
        <button className="ml-5" onClick={handleDelete}>
          {" "}
          Delete{" "}
        </button>
      </label>
    </div>
  );
};

export default Note;
