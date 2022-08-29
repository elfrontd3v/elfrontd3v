import React, { lazy } from "react";
import { Navigate, Route, Routes } from "react-router-dom";

export const PrivateRoute = ({ children }) => {
  const sessionInfo = JSON.parse(sessionStorage.getItem("storage"));
  return sessionInfo ? children : <Navigate to={"/"} />;
};
export const PublicRoute = ({ children }) => {
  const sessionInfo = JSON.parse(sessionStorage.getItem("storage"));
  return sessionInfo ? <Navigate to={"/home"} /> : children;
};

const SignIn = lazy(() => import("./pages/signIn/components/SignIn"));
const Home = lazy(() => import("./pages/home/components/Home"));

export const AllRoutes = () => {
  return (
    <Routes>
      <Route
        path={"/home"}
        element={
          <PrivateRoute>
            <Home />
          </PrivateRoute>
        }
      />
      <Route path={"/expenses"} element={<PrivateRoute></PrivateRoute>} />
      <Route path={"/logOut"} element={<PrivateRoute></PrivateRoute>} />
      <Route
        path={"/"}
        element={
          <PublicRoute>
            <SignIn />
          </PublicRoute>
        }
      />
      <Route path={"*"} element={<></>} />
    </Routes>
  );
};
