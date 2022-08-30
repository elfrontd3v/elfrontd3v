import React, { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { signOutFirebase } from "../../../../api/firebase/Auth";
import { AuthContext } from "../../../../core/context";

const LogOut = () => {
  const [authState, authDispatch] = useContext(AuthContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (authState?.uid) {
      console.log("cerrando sesión");
      signOutFirebase().then(() => {
        sessionStorage.removeItem("storage");
        authDispatch({ type: "LOG_OUT" });
        navigate("/");
      });
    }
  }, []);

  return <></>;
};

export default LogOut;
