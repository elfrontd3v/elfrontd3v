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

const SignIn = lazy(() => import("./pages/auth/signIn/components/SignIn"));
const Home = lazy(() => import("./pages/home/components/Home"));
const NotFoundPage = lazy(() => import("./pages/layout/NotFoundPage"));

export const AllRoutes = () => {
  return (
    <Routes>
      <Route
        path={"/home"}
        element={
          <PublicRoute>
            <Home />
          </PublicRoute>
        }
      />
      <Route
        path={"/"}
        element={
          <PublicRoute>
            <SignIn></SignIn>
          </PublicRoute>
        }
      />
      <Route path={"*"} element={<NotFoundPage />} />
    </Routes>
  );
};
