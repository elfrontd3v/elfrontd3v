import { Button, Container, Grid, Typography } from "@mui/material";
import React from "react";

const NotFoundPage = () => {
  return (
    <Container maxWidth="md">
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Typography variant="h1">404</Typography>
          <Typography variant="h6">
            The page you’re looking for doesn’t exist.
          </Typography>
          <Button variant="contained">Back Home</Button>
        </Grid>
      </Grid>
    </Container>
  );
};

export default NotFoundPage;
