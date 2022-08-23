import React from "react";
import {
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Switch,
  styled,
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

const StyledListItemText = styled(ListItemText)(({ theme }) => ({
  [theme.breakpoints.down("md")]: {
    display: "none",
  },
}));

const StyledSwitch = styled(Switch)(({ theme }) => ({
  [theme.breakpoints.down("md")]: {
    display: "none",
  },
}));

const StyledListItemIcon = styled(ListItemIcon)(({ theme }) => ({
  [theme.breakpoints.down("md")]: {
    minWidth: "24px",
  },
}));

const Sidebar = () => {
  const navigate = useNavigate();
  return (
    <Box
      flex={1}
      sx={{
        display: { xs: "none", sm: "block" },
        flex: { sm: "0.5", md: "1", lg: "1" },
        padding: { sm: "1", md: "2", lg: "2" },
      }}
    >
      <Box position={"fixed"}>
        <List>
          <ListItem disablePadding>
            <ListItemButton onClick={() => navigate("/home")}>
              <StyledListItemIcon>
                <HomeIcon />
              </StyledListItemIcon>
              <StyledListItemText primary={"Home"} />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton onClick={() => navigate("/dashboard")}>
              <StyledListItemIcon>
                <DashboardIcon />
              </StyledListItemIcon>
              <StyledListItemText primary={"Dashboard"} />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton onClick={() => navigate("/shop")}>
              <StyledListItemIcon>
                <AddBusinessIcon />
              </StyledListItemIcon>
              <StyledListItemText primary={"Shop"} />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton onClick={() => navigate("/earnings")}>
              <StyledListItemIcon>
                <AddCardIcon />
              </StyledListItemIcon>
              <StyledListItemText primary={"Earnings"} />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton onClick={() => navigate("/expenses")}>
              <StyledListItemIcon>
                <CreditCardOffIcon />
              </StyledListItemIcon>
              <StyledListItemText primary={"Expenses"} />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton onClick={() => navigate("/friends")}>
              <StyledListItemIcon>
                <PersonIcon />
              </StyledListItemIcon>
              <StyledListItemText primary={"Friends"} />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton onClick={() => navigate("/profile")}>
              <StyledListItemIcon>
                <AccountBoxIcon />
              </StyledListItemIcon>
              <StyledListItemText primary={"Profile"} />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton onClick={() => navigate("/settings")}>
              <StyledListItemIcon>
                <SettingsIcon />
              </StyledListItemIcon>
              <StyledListItemText primary={"Settings"} />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <StyledListItemIcon>
                <ModeNightIcon />
              </StyledListItemIcon>
              <StyledSwitch />
            </ListItemButton>
          </ListItem>
        </List>
      </Box>
    </Box>
  );
};

export default Sidebar;
