import React, { useState } from "react";

const initialData = {
  name: "",
  message: "",
};
const ContactForm = () => {
  const [contact, setContact] = useState(initialData);
  const handleNameChange = (e) => {
    setContact({
      ...contact,
      name: e.target.value,
    });
  };
  

  const handleMessageChange = (e) => {
    setContact({
      ...contact,
      message: e.target.value,
    });
  };
  return (
    <div>
      <h1>Contact Form</h1>
      <form action="">
        <input
          type="text"
          placeholder="Name"
          value={contact.name}
          onChange={handleNameChange}
        />
        <br />
        <input
          type="text"
          placeholder="Message"
          value={contact.message}
          onChange={handleMessageChange}
        />
      </form>
      <h1>Contact Detail</h1>
      <p>Name : {contact.name}</p>
      <p>Message : {contact.message}</p>
    </div>
  );
};

export default ContactForm;
