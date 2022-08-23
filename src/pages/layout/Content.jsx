import React from "react";
import { Box } from "@mui/material";
import Post from "../../components/post/Post";
const Content = ({ children }) => {
  return (
    <Box flex={4} p={2}>
      {children}
      <Post />
      <Post />
    </Box>
  );
};

export default Content;
