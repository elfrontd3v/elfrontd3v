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

const Sidebar = ({ mode, setMode }) => {
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
            <ListItemButton href="/home">
              <StyledListItemIcon>
                <HomeIcon />
              </StyledListItemIcon>
              <StyledListItemText primary={"Home"} />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton href="#home">
              <StyledListItemIcon>
                <AddBusinessIcon />
              </StyledListItemIcon>
              <StyledListItemText primary={"Shop"} />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton href="#home">
              <StyledListItemIcon>
                <AddCardIcon />
              </StyledListItemIcon>
              <StyledListItemText primary={"Earnings"} />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton href="#home">
              <StyledListItemIcon>
                <CreditCardOffIcon />
              </StyledListItemIcon>
              <StyledListItemText primary={"Expenses"} />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton href="#home">
              <StyledListItemIcon>
                <PersonIcon />
              </StyledListItemIcon>
              <StyledListItemText primary={"Friends"} />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton href="#home">
              <StyledListItemIcon>
                <AccountBoxIcon />
              </StyledListItemIcon>
              <StyledListItemText primary={"Profile"} />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton href="#home">
              <StyledListItemIcon>
                <SettingsIcon />
              </StyledListItemIcon>
              <StyledListItemText primary={"Settings"} />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton href="#home">
              <StyledListItemIcon>
                <ModeNightIcon />
              </StyledListItemIcon>
              <StyledSwitch
                onChange={() => setMode(mode === "light" ? "dark" : "light")}
              />
            </ListItemButton>
          </ListItem>
        </List>
      </Box>
    </Box>
  );
};

export default Sidebar;
