import React from "react";
import useProfile from "../hooks/useProfile";

import CardImage from "components/cards/CardImage";
import ProfileForm from "./ProfileForm";
import "./profile.scss";
const Profile = () => {
  const { userData } = useProfile();
  return (
    <>
      <CardImage />
      <ProfileForm />
    </>
  );
};

export default Profile;
