import React, { useRef, useState } from "react";
import GuestBookForm from "./GuestBookForm";

const GuestBook = () => {
  const [name, setName] = useState();
  const [message, setMessage] = useState();
  const nameInput = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    setName("");
    setMessage("");

    nameInput.current.focus();
    alert(`name : ${name}, message : ${message}`);
  };
  return (
    <div>
      <h1>Guest Book</h1>
      <form action="">
        <GuestBookForm name={name} setName={setName} ref={nameInput} />
        <br />
        <label htmlFor="message">Message</label> <br />
        <textarea
          name="message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          id=""
        ></textarea>
        <br />
        <button type="submit" onClick={handleSubmit}>
          Submit
        </button>
      </form>
    </div>
  );
};

export default GuestBook;
