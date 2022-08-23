import { createContext, useReducer } from "react";
import { createTheme, ThemeProvider } from "@mui/material";
import ES from "../languages/ES";
import EN from "../languages/EN";

export const ThemeAppContext = createContext({});

const initialState = {
  themeClass: "light",
  language: "ES",
  ...ES,
};

const ThemeAppReducer = (state = initialState, action) => {
  switch (action.type) {
    case "DARK_MODE":
      return { ...state, themeClass: "dark" };
    case "LIGHT_MODE":
      return { ...state, themeClass: "light" };
    case "SWITCH_TO_ENGLISH":
      return { language: "EN", ...EN };
    case "SWITCH_TO_SPANISH":
      return { language: "ES", ...ES };
    default:
      return { ...initialState };
  }
};

export const ThemeAppProvider = ({ children }) => {
  const [state, ThemeAppDispatch] = useReducer(ThemeAppReducer, initialState);

  const darkTheme = createTheme({
    palette: {
      mode: state.themeClass,
    },
  });

  return (
    <ThemeAppContext.Provider value={[state, ThemeAppDispatch]}>
      <ThemeProvider theme={darkTheme}>{children}</ThemeProvider>
    </ThemeAppContext.Provider>
  );
};

export default ThemeAppProvider;
