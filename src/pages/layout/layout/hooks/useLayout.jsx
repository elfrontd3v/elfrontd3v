import { useContext, useEffect, useState } from "react";
import AuthService from "../../../../api/AuthService";
import { AuthContext, ThemeAppContext } from "../../../../core/context";

const useLayout = () => {
  const [authState, authDispatch] = useContext(AuthContext);
  const [authLoading, setAuthLoading] = useState(false);
  const [, themeAppDispatch] = useContext(ThemeAppContext);

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
          themeAppDispatch({
            type: response.themePreference,
          });
          themeAppDispatch({
            type: response.languagePreference,
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
  }, [authState.uid]);
  return { authState, authLoading };
};

export default useLayout;
