import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { AllRoutes } from "./routes";
import ThemeAppProvider from "./core/context/ThemeAppContext";
import Layout from "./pages/layout/layout/Layout";
import { AuthProvider } from "./core/context";

const ApplicationProviders = () => (
  <AuthProvider>
    <ThemeAppProvider>
      <BrowserRouter>
        <Layout>
          <Suspense fallback={<></>}>
            <AllRoutes />
          </Suspense>
        </Layout>
      </BrowserRouter>
    </ThemeAppProvider>
  </AuthProvider>
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<ApplicationProviders />);
