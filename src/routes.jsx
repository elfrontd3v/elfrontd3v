import React, { lazy } from "react";
import { Navigate } from "react-router-dom";
import { HomeOutlined, DollarCircleOutlined } from "@ant-design/icons";

export const PrivateRoute = ({ children }) => {
  const sessionInfo = JSON.parse(sessionStorage.getItem("storage"));
  return sessionInfo ? children : <Navigate to={"/"} />;
};
export const PublicRoute = ({ children }) => {
  const sessionInfo = JSON.parse(sessionStorage.getItem("storage"));
  return sessionInfo ? <Navigate to={"/home"} /> : children;
};

const SignIn = lazy(() => import("./pages/signIn/components/SignIn"));
const Home = lazy(() => import("./pages/home/home/components/Home"));
const Dashboard = lazy(() =>
  import("./pages/home/dashboard/components/Dashboard")
);
const Earnings = lazy(() =>
  import("./pages/counts/earnings/components/Earnings")
);
const Expenses = lazy(() =>
  import("./pages/counts/expenses/components/Expenses")
);

export const routes = ({ generalDictionary }) => [
  {
    path: "",
    name: "home",
    icon: <HomeOutlined />,
    text: generalDictionary.HOME,
    disabled: false,
    isHidden: false,
    children: [
      {
        path: "/home",
        name: "/home",
        icon: null,
        element: (
          <PrivateRoute>
            <Home />
          </PrivateRoute>
        ),
        text: generalDictionary.HOME,
        disabled: false,
        isHidden: false,
      },
      {
        path: "/home/dashboard",
        name: "/home/dashboard",
        icon: null,
        element: (
          <PrivateRoute>
            <Dashboard />
          </PrivateRoute>
        ),
        text: generalDictionary.DASHBOARD,
        disabled: false,
        isHidden: false,
      },
    ],
  },
  {
    path: "",
    name: "counts",
    icon: <DollarCircleOutlined />,
    text: generalDictionary.COUNTS,
    disabled: false,
    isHidden: false,
    children: [
      {
        path: "/counts/earnings",
        name: "/counts/earnings",
        icon: null,
        element: (
          <PrivateRoute>
            <Earnings />
          </PrivateRoute>
        ),
        text: generalDictionary.EARNINGS,
        disabled: false,
        isHidden: false,
      },
      {
        path: "/counts/expenses",
        name: "/counts/expenses",
        icon: null,
        element: (
          <PrivateRoute>
            <Expenses />
          </PrivateRoute>
        ),
        text: generalDictionary.EXPENSES,
        disabled: false,
        isHidden: false,
      },
    ],
  },
  {
    path: "/",
    name: "signIn",
    icon: null,
    text: "",
    disabled: false,
    isHidden: true,
    children: null,
    element: (
      <PublicRoute>
        <SignIn />
      </PublicRoute>
    ),
  },
  {
    path: "*",
    name: "notFound",
    icon: null,
    text: "",
    disabled: false,
    isHidden: true,
    children: null,
    element: (
      <PublicRoute>
        <></>
      </PublicRoute>
    ),
  },
];
