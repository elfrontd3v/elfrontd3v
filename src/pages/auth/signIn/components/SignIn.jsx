import React from "react";
import {
  Avatar,
  Box,
  Button,
  Link,
  TextField,
  Typography,
  ButtonGroup,
} from "@mui/material";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import GoogleIcon from "@mui/icons-material/Google";
import FacebookIcon from "@mui/icons-material/Facebook";
import GitHubIcon from "@mui/icons-material/GitHub";
import useSignIn from "../hooks/useSignIn";
import "./signIn.scss";

const SignIn = () => {
  const { formik, generalDictionary } = useSignIn();
  return (
    <>
      <Box className="boxContainer">
        <Avatar sx={{ m: 2, bgcolor: "secondary.main" }}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography variant="h5">{generalDictionary.SIGN_IN}</Typography>
        <Box onSubmit={formik.handleSubmit} component="form">
          <TextField
            fullWidth
            margin="normal"
            id="email"
            name="email"
            type="email"
            label={generalDictionary.EMAIL}
            value={formik.values.email}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.email && Boolean(formik.errors.email)}
            helperText={formik.touched.email && formik.errors.email}
          />
          <TextField
            fullWidth
            margin="normal"
            name="password"
            id="password"
            type="password"
            label={generalDictionary.PASSWORD}
            value={formik.values.password}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.password && Boolean(formik.errors.password)}
            helperText={formik.touched.password && formik.errors.password}
          />
          <Button
            fullWidth
            size="large"
            className="sigInButton"
            type="submit"
            variant="contained"
            disabled={!formik.isValid}
          >
            {generalDictionary.SIGN_IN}
          </Button>
          <ButtonGroup variant="text" fullWidth className="sigInButton icons">
            <Button color="error">{<GoogleIcon />}</Button>
            <Button color="primary">{<FacebookIcon />}</Button>
            <Button color="secondary">{<GitHubIcon />}</Button>
          </ButtonGroup>
          <Link onClick={() => {}}>{generalDictionary.NOT_HAVE_ACCOUNT}</Link>
        </Box>
      </Box>
    </>
  );
};

export default SignIn;
