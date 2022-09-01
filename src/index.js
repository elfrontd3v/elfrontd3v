import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { AuthProvider, ThemeProvider } from "core/context";
import App from "components/app/App";
import "antd/dist/antd.min.css";
import "assets/index.scss";

const ApplicationProviders = ({ children }) => (
  <AuthProvider>
    <ThemeProvider>
      <BrowserRouter>{children}</BrowserRouter>
    </ThemeProvider>
  </AuthProvider>
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <ApplicationProviders>
    <App />
  </ApplicationProviders>
);
