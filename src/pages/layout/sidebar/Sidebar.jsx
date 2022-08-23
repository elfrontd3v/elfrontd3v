import React, { useState } from "react";
import {
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Switch,
  styled,
  Drawer,
} from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import PersonIcon from "@mui/icons-material/Person";
import SettingsIcon from "@mui/icons-material/Settings";
import ModeNightIcon from "@mui/icons-material/ModeNight";
import AddBusinessIcon from "@mui/icons-material/AddBusiness";
import AddCardIcon from "@mui/icons-material/AddCard";
import CreditCardOffIcon from "@mui/icons-material/CreditCardOff";
import DashboardIcon from "@mui/icons-material/Dashboard";
import { useNavigate } from "react-router-dom";

const Sidebar = ({ visibleDrawer, setVisibleDrawer }) => {
  const navigate = useNavigate();
  const menuList = (
    <List>
      <ListItem disablePadding>
        <ListItemButton onClick={() => navigate("/home")}>
          <ListItemIcon>
            <HomeIcon />
          </ListItemIcon>
          <ListItemText primary={"Home"} />
        </ListItemButton>
      </ListItem>
      <ListItem disablePadding>
        <ListItemButton onClick={() => navigate("/dashboard")}>
          <ListItemIcon>
            <DashboardIcon />
          </ListItemIcon>
          <ListItemText primary={"Dashboard"} />
        </ListItemButton>
      </ListItem>
      <ListItem disablePadding>
        <ListItemButton onClick={() => navigate("/shop")}>
          <ListItemIcon>
            <AddBusinessIcon />
          </ListItemIcon>
          <ListItemText primary={"Shop"} />
        </ListItemButton>
      </ListItem>
      <ListItem disablePadding>
        <ListItemButton onClick={() => navigate("/earnings")}>
          <ListItemIcon>
            <AddCardIcon />
          </ListItemIcon>
          <ListItemText primary={"Earnings"} />
        </ListItemButton>
      </ListItem>
      <ListItem disablePadding>
        <ListItemButton onClick={() => navigate("/expenses")}>
          <ListItemIcon>
            <CreditCardOffIcon />
          </ListItemIcon>
          <ListItemText primary={"Expenses"} />
        </ListItemButton>
      </ListItem>
      <ListItem disablePadding>
        <ListItemButton onClick={() => navigate("/friends")}>
          <ListItemIcon>
            <PersonIcon />
          </ListItemIcon>
          <ListItemText primary={"Friends"} />
        </ListItemButton>
      </ListItem>
      <ListItem disablePadding>
        <ListItemButton onClick={() => navigate("/profile")}>
          <ListItemIcon>
            <AccountBoxIcon />
          </ListItemIcon>
          <ListItemText primary={"Profile"} />
        </ListItemButton>
      </ListItem>
      <ListItem disablePadding>
        <ListItemButton onClick={() => navigate("/settings")}>
          <ListItemIcon>
            <SettingsIcon />
          </ListItemIcon>
          <ListItemText primary={"Settings"} />
        </ListItemButton>
      </ListItem>
      <ListItem disablePadding>
        <ListItemButton>
          <ListItemIcon>
            <ModeNightIcon />
          </ListItemIcon>
          <Switch />
        </ListItemButton>
      </ListItem>
    </List>
  );

  return (
    <>
      <Box
        flex={1}
        sx={{
          display: { xs: "none", sm: "none", md: "block", lg: "block" },
          flex: { xs: "0", sm: "0", md: "1", lg: "1" },
          padding: { xs: "0", sm: "0", md: "2", lg: "2" },
        }}
      >
        <Box position={"fixed"}>{menuList}</Box>
      </Box>
      <Drawer
        variant="temporary"
        anchor="left"
        open={visibleDrawer}
        onClose={() => setVisibleDrawer(false)}
      >
        {menuList}
      </Drawer>
    </>
  );
};

export default Sidebar;
