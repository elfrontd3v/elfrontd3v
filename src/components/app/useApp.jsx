import { useContext, useEffect, useState } from "react";
import AuthService from "../../api/AuthService";
import { AuthContext, ThemeContext } from "../../core/context";

const useApp = () => {
  const [authState, authDispatch] = useContext(AuthContext);
  const [themeState, themeDispatch] = useContext(ThemeContext);
  const [authLoading, setAuthLoading] = useState(false);
  useEffect(() => {
    setAuthLoading(true);
    const sessionInfo = JSON.parse(sessionStorage.getItem("storage"));
    if (sessionInfo && sessionInfo.uid) {
      AuthService.getUser(sessionInfo.uid)
        .then((response) => {
          authDispatch({
            type: "LOGIN_USER",
            payload: response,
          });
          themeDispatch({
            type: response.themePreference,
          });
          setAuthLoading(false);
        })
        .catch((error) => {
          setAuthLoading(false);
          console.log("error", error);
        });
    } else {
      setAuthLoading(false);
      sessionStorage.removeItem("storage");
      authDispatch({
        type: "LOGOUT_USER",
      });
    }
  }, []);
  return { authState, themeState, authLoading };
};

export default useApp;
