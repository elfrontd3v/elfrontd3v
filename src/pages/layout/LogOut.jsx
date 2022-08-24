import React, { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { signOutFirebase } from "../../api/firebase/Auth";
import { AuthContext, ThemeAppContext } from "../../core/context";

const LogOut = () => {
  const [, authDispatch] = useContext(AuthContext);
  const [, themeAppDispatch] = useContext(ThemeAppContext);
  const navigate = useNavigate();
  useEffect(() => {
    signOutFirebase().then(() => {
      sessionStorage.removeItem("storage");
      authDispatch({ type: "LOG_OUT" });
      themeAppDispatch({ type: "" });
      navigate("/");
    });
  }, []);
  return <></>;
};

export default LogOut;
