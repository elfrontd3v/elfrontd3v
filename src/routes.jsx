import { lazy } from "react";
import { Navigate } from "react-router-dom";
import {
  HomeOutlined,
  DollarCircleOutlined,
  UserOutlined,
  CoffeeOutlined,
} from "@ant-design/icons";
import { FaCalculator } from "react-icons/fa";
export const PrivateRoute = ({ children }) => {
  const sessionInfo = JSON.parse(sessionStorage.getItem("storage"));
  return sessionInfo ? children : <Navigate to={"/"} />;
};
export const PublicRoute = ({ children }) => {
  const sessionInfo = JSON.parse(sessionStorage.getItem("storage"));
  return sessionInfo ? <Navigate to={"/home"} /> : children;
};
const LogIn = lazy(() => import("@/pages/logIn/components/LogIn"));
const Home = lazy(() => import("@/pages/home/home/components/Home.jsx"));
const Dashboard = lazy(() =>
  import("@/pages/home/dashboard/components/Dashboard")
);
const Earnings = lazy(() =>
  import("@/pages/counts/earnings/components/Earnings")
);
const Expenses = lazy(() =>
  import("@/pages/counts/expenses/components/Expenses")
);
const Loans = lazy(() => import("@/pages/counts/loans/components/Loans"));
const Fast = lazy(() => import("@/pages/calculator/fast/components/Fast"));
const Subject = lazy(() =>
  import("@/pages/calculator/subject/components/Subject")
);
const Profile = lazy(() =>
  import("@/pages/profile/profile/components/Profile")
);
const Tasks = lazy(() => import("@/pages/profile/tasks/components/Tasks"));
const LogOut = lazy(() => import("@/pages/profile/logOut/components/LogOut"));
const Users = lazy(() => import("@/pages/admin/users/components/Users"));
const Reports = lazy(() => import("@/pages/admin/reports/components/Reports"));

export const RoutesComponent = ({ generalDictionary }) => [
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
      {
        path: "/counts/loans",
        name: "/counts/loans",
        icon: null,
        element: (
          <PrivateRoute>
            <Loans />
          </PrivateRoute>
        ),
        text: generalDictionary.LOANS,
        disabled: false,
        isHidden: false,
      },
    ],
  },
  {
    path: "",
    name: "profile",
    icon: <UserOutlined />,
    text: generalDictionary.PROFILE,
    disabled: false,
    isHidden: false,
    children: [
      {
        path: "/profile",
        name: "/profile",
        icon: null,
        element: (
          <PrivateRoute>
            <Profile />
          </PrivateRoute>
        ),
        text: generalDictionary.PROFILE,
        disabled: false,
        isHidden: false,
      },
      {
        path: "/profile/task",
        name: "/profile/task",
        icon: null,
        element: (
          <PrivateRoute>
            <Tasks />
          </PrivateRoute>
        ),
        text: generalDictionary.TASKS,
        disabled: false,
        isHidden: false,
      },
      {
        path: "/profile/logout",
        name: "/profile/logout",
        icon: null,
        element: (
          <PrivateRoute>
            <LogOut />
          </PrivateRoute>
        ),
        text: generalDictionary.LOG_OUT,
        disabled: false,
        isHidden: false,
      },
    ],
  },
  {
    path: "",
    name: "calculator",
    icon: <FaCalculator />,
    text: generalDictionary.CALCULATOR,
    disabled: false,
    isHidden: false,
    children: [
      {
        path: "/fast",
        name: "/fast",
        icon: null,
        element: (
          <PrivateRoute>
            <Fast />
          </PrivateRoute>
        ),
        text: generalDictionary.FAST,
        disabled: false,
        isHidden: false,
      },
      {
        path: "/subject",
        name: "/subject",
        icon: null,
        element: (
          <PrivateRoute>
            <Subject />
          </PrivateRoute>
        ),
        text: generalDictionary.SUBJECT,
        disabled: false,
        isHidden: false,
      },
    ],
  },
  {
    path: "",
    name: "admin",
    icon: <CoffeeOutlined />,
    text: generalDictionary.ADMIN,
    disabled: false,
    isHidden: false,
    children: [
      {
        path: "/users",
        name: "/users",
        icon: null,
        element: (
          <PrivateRoute>
            <Users />
          </PrivateRoute>
        ),
        text: generalDictionary.USERS,
        disabled: false,
        isHidden: false,
      },
      {
        path: "/reports",
        name: "/reports",
        icon: null,
        element: (
          <PrivateRoute>
            <h1>Reportes</h1>
          </PrivateRoute>
        ),
        text: generalDictionary.REPORTS,
        disabled: false,
        isHidden: false,
      },
    ],
  },
  {
    path: "/",
    name: "logIn",
    icon: null,
    text: "",
    disabled: false,
    isHidden: true,
    children: null,
    element: (
      <PublicRoute>
        <LogIn />
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
        <Reports />
      </PublicRoute>
    ),
  },
];
