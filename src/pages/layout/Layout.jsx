import React, { useState } from "react";
import { Box, Grid, Stack } from "@mui/material";
import Navbar from "./navbar/Navbar";
import Sidebar from "./sidebar/Sidebar";
import Add from "./Add";
import RightBar from "./RightBar";

const Layout = ({ children }) => {
  const [visibleDrawer, setVisibleDrawer] = useState(false);
  return (
    <>
      <Box bgcolor={"background.default"} color={"text.primary"}>
        <Navbar setVisibleDrawer={setVisibleDrawer} />
        <Grid container>
          <Grid md={2}>
            <Sidebar
              visibleDrawer={visibleDrawer}
              setVisibleDrawer={setVisibleDrawer}
            />
          </Grid>
          <Grid md={8}>{children}</Grid>
          <Grid md={2}>
            <RightBar />
          </Grid>
        </Grid>
        <Add />
      </Box>
    </>
  );
};

export default Layout;
