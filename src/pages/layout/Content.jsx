import React from "react";
import { Box } from "@mui/material";
import Post from "../../components/Post";
const Content = () => {
  return (
    <Box flex={4} p={2}>
      <Post />
      <Post />
      <Post />
      <Post />
    </Box>
  );
};

export default Content;
