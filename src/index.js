import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import ThemeAppProvider from "./core/context/ThemeContext";
import App from "./App";

const ApplicationProviders = () => (
  <ThemeAppProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </ThemeAppProvider>
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<ApplicationProviders />);
