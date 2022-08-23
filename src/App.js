import React, { Suspense } from "react";
import Sidebar from "./pages/layout/Sidebar";
import Navbar from "./pages/layout/Navbar";
import Add from "./pages/layout/Add";
import { Box, Stack } from "@mui/material";
import { AllRoutes } from "./routes";

const App = () => {
  return (
    <Box bgcolor={"background.default"} color={"text.primary"}>
      <Navbar />
      <Stack direction={"row"} justifyContent={"space-between"}>
        {<Sidebar />}
        <Box flex={6} p={2}>
          <Suspense fallback={<></>}>
            <AllRoutes />
          </Suspense>
        </Box>
      </Stack>
      <Add />
    </Box>
  );
};

export default App;
