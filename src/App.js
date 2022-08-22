import React, { useState } from "react";
import Content from "./pages/layout/Content";
import RightBar from "./pages/layout/RightBar";
import Sidebar from "./pages/layout/Sidebar";
import Navbar from "./pages/layout/Navbar";
import Add from "./pages/layout/Add";

import { Box, Stack, createTheme, ThemeProvider } from "@mui/material";

const App = () => {
  const [mode, setMode] = useState("light");
  const darkTheme = createTheme({
    palette: {
      mode: mode,
    },
  });
  return (
    <ThemeProvider theme={darkTheme}>
      <Box bgcolor={"background.default"} color={"text.primary"}>
        <Navbar />
        <Stack direction={"row"} spacing={2} justifyContent={"space-between"}>
          <Sidebar setMode={setMode} mode={mode} />
          <Content />
          <RightBar />
        </Stack>
        <Add />
      </Box>
    </ThemeProvider>
  );
};

export default App;
