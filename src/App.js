import React, { Suspense } from "react";
import Content from "./pages/layout/Content";
import RightBar from "./pages/layout/RightBar";
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
        <Content>
          <Suspense fallback={<></>}>
            <AllRoutes />
          </Suspense>
        </Content>
        <RightBar />
      </Stack>
      <Add />
    </Box>
  );
};

export default App;
