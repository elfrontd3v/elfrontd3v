import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { AllRoutes } from "./routes";
import ThemeAppProvider from "./core/context/ThemeContext";
import Layout from "./pages/layout/Layout";

const ApplicationProviders = () => (
  <ThemeAppProvider>
    <BrowserRouter>
      <Layout>
        <Suspense fallback={<></>}>
          <AllRoutes />
        </Suspense>
      </Layout>
    </BrowserRouter>
  </ThemeAppProvider>
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<ApplicationProviders />);
