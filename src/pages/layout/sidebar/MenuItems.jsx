import React, { useContext } from "react";
import { ThemeAppContext } from "../../../core/context";
import HomeIcon from "@mui/icons-material/Home";
import DashboardIcon from "@mui/icons-material/Dashboard";
import AddBusinessIcon from "@mui/icons-material/AddBusiness";
import AddCardIcon from "@mui/icons-material/AddCard";
import CreditCardOffIcon from "@mui/icons-material/CreditCardOff";
import PersonIcon from "@mui/icons-material/Person";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import SettingsIcon from "@mui/icons-material/Settings";
import ModeNightIcon from "@mui/icons-material/ModeNight";
import LogoutIcon from "@mui/icons-material/Logout";

const MenuItems = () => {
  const [languageState] = useContext(ThemeAppContext);
  const { generalDictionary } = languageState;
  return [
    {
      id: 1,
      title: generalDictionary.HOME,
      path: "/home",
      icon: <HomeIcon />,
      navigate: true,
      type: "text",
    },
    {
      id: 2,
      title: generalDictionary.DASHBOARD,
      path: "/dashboard",
      icon: <DashboardIcon />,
      navigate: true,
      type: "text",
    },
    {
      id: 3,
      title: generalDictionary.SHOP,
      path: "/shop",
      icon: <AddBusinessIcon />,
      navigate: true,
      type: "text",
    },
    {
      id: 4,
      title: generalDictionary.EARNINGS,
      path: "/earnings",
      icon: <AddCardIcon />,
      navigate: true,
      type: "text",
    },
    {
      id: 5,
      title: generalDictionary.EXPENSES,
      path: "/expenses",
      icon: <CreditCardOffIcon />,
      navigate: true,
      type: "text",
    },
    {
      id: 6,
      title: generalDictionary.FRIENDS,
      path: "/friends",
      icon: <PersonIcon />,
      navigate: true,
      type: "text",
    },
    {
      id: 7,
      title: generalDictionary.PROFILE,
      path: "/profile",
      icon: <AccountBoxIcon />,
      navigate: true,
      type: "text",
    },
    {
      id: 8,
      title: generalDictionary.SETTINGS,
      path: "/settings",
      icon: <SettingsIcon />,
      navigate: true,
      type: "text",
    },
    {
      id: 9,
      title: generalDictionary.LOG_OUT,
      path: "/logOut",
      icon: <LogoutIcon />,
      navigate: true,
      type: "text",
    },
    {
      id: 10,
      title: "",
      path: "",
      icon: <ModeNightIcon />,
      navigate: false,
      type: "switch",
    },
  ];
};

export default MenuItems;
