import React, { useState } from "react";
import { ProfileContext } from "./ProfileContext";
import { Profile } from "./Profile";
import { ProfileAddress } from "./ProfileAdress";
import ProfileForm from "./ProfileForm";

export const ProfileApp = () => {
  const [name, setName] = useState("Jovian");

  return (
    <div>
      <ProfileContext.Provider value={name}>
        <h1>Profile APP</h1>
        <ProfileForm name={name} setName={setName} />
        <Profile />
        <ProfileAddress />
      </ProfileContext.Provider>
    </div>
  );
};

export default ProfileApp;
