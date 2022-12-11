import React, { useContext, useState } from "react";
import NotesContext from "../context/notes-context";

const AddNoteform = () => {
  const { dispatch } = useContext(NotesContext);

  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  const addNote = (e) => {
    e.preventDefault();

    if (title) {
      // setNotes(
      //     [
      //         ...notes,
      //         {title, body}
      //     ]
      // )
      dispatch({ type: "ADD_NOTE", title, body });
      setTitle("");
      setBody("");
    }
  };

  return (
    <form onSubmit={addNote}>
      <div className="form-group">
        <input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="form-control"
        />
      </div>
      <div className="form-group">
        <textarea
          value={body}
          onChange={(e) => setBody(e.target.value)}
          className="form-control"
        ></textarea>
      </div>
      <button className="btn btn-primary btn-block">Add Note</button>
    </form>
  );
};

export default AddNoteform;
