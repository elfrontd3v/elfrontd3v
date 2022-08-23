import React, { Suspense } from "react";
import Sidebar from "./pages/layout/Sidebar";
import Navbar from "./pages/layout/Navbar";
import Add from "./pages/layout/Add";
import { Box, Stack } from "@mui/material";
import { AllRoutes } from "./routes";

const App = ({ setMode, mode }) => {
  return (
    <Box bgcolor={"background.default"} color={"text.primary"}>
      <Navbar />
      <Stack direction={"row"} spacing={2} justifyContent={"space-between"}>
        <Sidebar setMode={setMode} mode={mode} />
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
