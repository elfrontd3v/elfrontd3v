import { useFormik } from "formik";
import { useContext, useState } from "react";
import { AuthContext, ThemeAppContext } from "../../../../core/context";
import * as Yup from "yup";
import {
  facebookSigIinFirebase,
  gitHubSignInFirebase,
  googleSignInFirebase,
  signInFirebase,
} from "../../../../api/firebase/Auth";
import UserClass from "../../../../core/class/UserClass";
import AuthService from "../../../../api/AuthService";
import { useSnackbar } from "notistack";
import { useNavigate } from "react-router-dom";

const useSignIn = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [, authDispatch] = useContext(AuthContext);
  const [languageState] = useContext(ThemeAppContext);
  const { generalDictionary } = languageState;
  const { enqueueSnackbar } = useSnackbar();
  const navigate = useNavigate();

  const validationSchema = Yup.object({
    email: Yup.string(generalDictionary.REQUIRED)
      .required(generalDictionary.REQUIRED)
      .email(generalDictionary.VALIDATE_EMAIL)
      .min(5, generalDictionary.VALIDATE_EMAIL_LENGTH)
      .max(50, generalDictionary.VALIDATE_EMAIL_LENGTH),
    password: Yup.string(generalDictionary.VALIDATE_PASSWORD)
      .required(generalDictionary.REQUIRED)
      .min(6, generalDictionary.VALIDATE_PASSWORD_LENGTH)
      .max(15, generalDictionary.VALIDATE_PASSWORD_LENGTH),
  });

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => signInHandler(values),
  });

  const signInHandler = (values) => {
    setIsLoading(true);
    sessionStorage.removeItem("storage");
    signInFirebase(values.email, values.password)
      .then((response) => {
        getUserDetail(response.user, "Email");
      })
      .catch((error) => {
        setIsLoading(false);
        validateErrorMessage(error.message);
        console.log(error.message);
      });
  };

  const getUserDetail = (credential, providerId) => {
    const userPayload = new UserClass(credential, credential.uid, providerId);
    AuthService.getUserDetail(userPayload.state)
      .then((user) => {
        setIsLoading(false);
        enqueueSnackbar(
          `Bienvenido ${user.rol} ${user.name ? user.name : user.email}`,
          { variant: "success" }
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
        navigate("/home");
      })
      .catch((error) => {
        setIsLoading(false);
        validateErrorMessage(error.message);
        console.log("error", error);
      });
  };

  const signInGoogle = () => {
    setIsLoading(true);
    googleSignInFirebase()
      .then((response) => {
        getUserDetail(response.user, response.providerId);
      })
      .catch((error) => {
        setIsLoading(false);
        validateErrorMessage(error.message);
        console.log(error.message);
      });
  };

  const sigInFacebook = () => {
    setIsLoading(true);
    facebookSigIinFirebase()
      .then((response) => {
        getUserDetail(response.user, response.providerId);
      })
      .catch((error) => {
        setIsLoading(false);
        validateErrorMessage(error.message);
        console.log(error.message);
      });
  };

  const sigInGitHub = () => {
    setIsLoading(true);
    gitHubSignInFirebase()
      .then((response) => {
        getUserDetail(response.user, response.providerId);
      })
      .catch((error) => {
        setIsLoading(false);
        validateErrorMessage(error.message);
        console.log(error.message);
      });
  };

  const validateErrorMessage = (error) => {
    if (error === "Firebase: Error (auth/email-already-in-use).") {
      enqueueSnackbar(generalDictionary.EMAIL_NOT_AVAILABLE, {
        variant: "error",
      });
    } else if (
      error ===
      "Firebase: Error (auth/account-exists-with-different-credential)."
    ) {
      enqueueSnackbar(generalDictionary.EMAIL_REGISTER_WITH_DIFFERENT_METHOD, {
        variant: "error",
      });
    } else if (error === "Firebase: Error (auth/popup-closed-by-user).") {
      enqueueSnackbar(generalDictionary.CLOSED_POPUP, {
        variant: "error",
      });
    } else if (error.message === "Firebase: Error (auth/user-not-found).") {
      enqueueSnackbar(generalDictionary.USER_OR_PASSWORD_INCORRECT, {
        variant: "error",
      });
    } else if (error.message === "Firebase: Error (auth/wrong-password).") {
      enqueueSnackbar(generalDictionary.PASSWORD_INCORRECT, {
        variant: "error",
      });
    } else {
      enqueueSnackbar(generalDictionary.LOGIN_ERROR, {
        variant: "error",
      });
    }
  };

  return {
    formik,
    generalDictionary,
    isLoading,
    signInMethods: {
      signInGoogle,
      sigInFacebook,
      sigInGitHub,
    },
  };
};

export default useSignIn;
