import React from "react";

const GuestBookForm = ({ ref, name, setName }) => {
  return (
    <div>
      {" "}
      <label htmlFor="name">Name</label> <br />
      <input
        type="text"
        name="name"
        ref={ref}
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
    </div>
  );
};

export default GuestBookForm;
