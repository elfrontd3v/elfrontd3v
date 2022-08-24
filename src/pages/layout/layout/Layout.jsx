import React, { useState } from "react";
import { Backdrop, Box, CircularProgress, Grid } from "@mui/material";
import Navbar from "../navbar/Navbar";
import Sidebar from "../sidebar/Sidebar";
import Add from "../Add";

import useLayout from "./hooks/useLayout";

const Layout = ({ children }) => {
  const { authState, authLoading } = useLayout();
  const [visibleDrawer, setVisibleDrawer] = useState(false);

  return (
    <>
      <Backdrop
        sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={authLoading}
      >
        <CircularProgress color="inherit" />
      </Backdrop>
      <Box
        bgcolor={"background.default"}
        color={"text.primary"}
        sx={{ minHeight: "100vh" }}
      >
        <Navbar setVisibleDrawer={setVisibleDrawer} authState={authState} />
        <Grid container>
          <Grid md={3} lg={2} item>
            {authState?.uid && (
              <Sidebar
                visibleDrawer={visibleDrawer}
                setVisibleDrawer={setVisibleDrawer}
              />
            )}
          </Grid>
          <Grid md={8} lg={8} item>
            {children}
          </Grid>
          <Grid md={1} lg={2} item>
            {
              //<RightBar />
            }
          </Grid>
        </Grid>
        <Add />
      </Box>
    </>
  );
};

export default Layout;
