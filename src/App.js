import React from "react";
import Content from "./pages/layout/Content";
import RightBar from "./pages/layout/RightBar";
import Sidebar from "./pages/layout/Sidebar";

import { Box, Stack } from "@mui/material";
import Navbar from "./pages/layout/Navbar";

const App = () => {
  return (
    <Box>
      <Navbar />
      <Stack direction={"row"} spacing={2} justifyContent={"space-between"}>
        <Sidebar />
        <Content />
        <RightBar />
      </Stack>
    </Box>
  );
};

export default App;
