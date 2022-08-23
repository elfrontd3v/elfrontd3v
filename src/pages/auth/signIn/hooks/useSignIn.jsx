import { useFormik } from "formik";
import { useContext } from "react";
import { ThemeAppContext } from "../../../../core/context";
import * as Yup from "yup";

const useSignIn = () => {
  const [languageState] = useContext(ThemeAppContext);
  const { generalDictionary } = languageState;

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
    onSubmit: (values) => handleSubmit(values),
  });

  const handleSubmit = (values) => {
    console.log(values);
  };

  return { formik, generalDictionary };
};

export default useSignIn;
