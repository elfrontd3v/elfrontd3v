import React, { Suspense } from "react";
import Layout from "./pages/layout/Layout";

import { AllRoutes } from "./routes";

const App = () => {
  return (
    <Layout>
      <Suspense fallback={<></>}>
        <AllRoutes />
      </Suspense>
    </Layout>
  );
};

export default App;
