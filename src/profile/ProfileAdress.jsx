import { useContext } from "react";
import { ProfileContext } from "./ProfileContext";

export const ProfileAddress = () => {
  const profile = useContext(ProfileContext);

  return (
    <>
      <h2>Profile Adress</h2>
      <p>Alamat {profile}</p>
    </>
  );
};
