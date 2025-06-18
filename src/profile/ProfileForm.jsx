import React from "react";

export const ProfileForm = ({name, setName}) => {
  const handleChange = (e) => {
    setName(e.target.value);
  };
  return (
    <div>
      <h1> ProfileForm</h1>
      <input type="text" value={name} onChange={handleChange} />
    </div>
  );
};

export default ProfileForm;
