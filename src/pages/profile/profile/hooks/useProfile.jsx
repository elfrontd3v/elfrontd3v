import { AuthContext, ThemeContext } from "core/context";
import React, { useContext, useEffect, useState } from "react";

const useProfile = () => {
  const [themeState, themeDispatch] = useContext(ThemeContext);
  const [authContext, authDispatch] = useContext(AuthContext);
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    getUserInformation();
  }, []);

  const getUserInformation = () => {
    console.log("themeState", themeState);
    console.log("authContext", authContext);
    setUserData({
      name: "",
      language: "",
      photoURL: "",
    });
  };

  return { userData };
};

export default useProfile;
