import { useContext, useState } from "react";

import {
  facebookSigIinFirebase,
  gitHubSignInFirebase,
  googleSignInFirebase,
  signInFirebase,
} from "api/firebase/Auth";

import { message } from "antd";
import { AuthContext, ThemeContext } from "core/context";
import UserClass from "core/class/UserClass";
import AuthService from "api/AuthService";

const useSignIn = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [, authDispatch] = useContext(AuthContext);
  const [themeState, themeDispatch] = useContext(ThemeContext);

  const { generalDictionary } = themeState;

  const getUserDetail = (credential, providerId) => {
    const userPayload = new UserClass(credential, credential.uid, providerId);
    AuthService.getUserDetail(userPayload.state)
      .then((user) => {
        message.success(
          `Bienvenido ${user.rol} ${user.name ? user.name : user.email}`
        );
        sessionStorage.setItem(
          "storage",
          JSON.stringify({
            email: user.email,
            uid: user.uid,
            token: user.accessToken,
          })
        );
        authDispatch({
          type: "LOGIN_USER",
          payload: user,
        });
        themeDispatch({
          type: user.themePreference,
        });
        setIsLoading(false);
      })
      .catch((error) => {
        validateErrorMessage(error.message);
        setIsLoading(false);
        console.error("error", error);
      });
  };

  const signInHandler = (values) => {
    sessionStorage.removeItem("storage");
    setIsLoading(true);
    signInFirebase(values.email, values.password)
      .then((response) => {
        getUserDetail(response.user, "Email");
      })
      .catch((error) => {
        validateErrorMessage(error.message);
        console.error(error.message);
        setIsLoading(false);
      });
  };

  const signInGoogle = () => {
    setIsLoading(true);
    googleSignInFirebase()
      .then((response) => {
        getUserDetail(response.user, response.providerId);
      })
      .catch((error) => {
        validateErrorMessage(error.message);
        console.error(error.message);
        setIsLoading(false);
      });
  };

  const sigInFacebook = () => {
    setIsLoading(true);
    facebookSigIinFirebase()
      .then((response) => {
        getUserDetail(response.user, response.providerId);
      })
      .catch((error) => {
        validateErrorMessage(error.message);
        console.error(error.message);
        setIsLoading(false);
      });
  };

  const sigInGitHub = () => {
    setIsLoading(true);
    gitHubSignInFirebase()
      .then((response) => {
        getUserDetail(response.user, response.providerId);
      })
      .catch((error) => {
        validateErrorMessage(error.message);
        console.error(error.message);
        setIsLoading(false);
      });
  };

  const validateErrorMessage = (error) => {
    if (error === "Firebase: Error (auth/email-already-in-use).") {
      message.error(generalDictionary.EMAIL_NOT_AVAILABLE);
    } else if (
      error ===
      "Firebase: Error (auth/account-exists-with-different-credential)."
    ) {
      message.error(generalDictionary.EMAIL_REGISTER_WITH_DIFFERENT_METHOD);
    } else if (error === "Firebase: Error (auth/popup-closed-by-user).") {
      message.error(generalDictionary.CLOSED_POPUP);
    } else if (error.message === "Firebase: Error (auth/user-not-found).") {
      message.error(generalDictionary.USER_OR_PASSWORD_INCORRECT);
    } else if (error.message === "Firebase: Error (auth/wrong-password).") {
      message.error(generalDictionary.PASSWORD_INCORRECT);
    } else {
      message.error(generalDictionary.LOGIN_ERROR);
    }
  };

  const emailRules = [
    {
      required: true,
      min: 8,
      type: "email",
      message: generalDictionary.VALIDATE_EMAIL,
    },
  ];
  const passwordRules = [
    {
      required: true,
      min: 5,
      message: generalDictionary.VALIDATE_PASSWORD,
    },
  ];

  return {
    emailRules,
    passwordRules,
    isLoading,
    generalDictionary,
    signInHandler,
    signInGoogle,
    sigInFacebook,
    sigInGitHub,
  };
};

export default useSignIn;
