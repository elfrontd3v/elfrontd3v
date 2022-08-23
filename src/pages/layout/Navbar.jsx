import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  styled,
  Typography,
  Box,
  Badge,
  Avatar,
  Menu,
  MenuItem,
} from "@mui/material";
import BugReportIcon from "@mui/icons-material/BugReport";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";

const StyledToolBar = styled(Toolbar)({
  display: "flex",
  justifyContent: "space-between",
  minHeight: "64px",
});

const Icons = styled(Box)(({ theme }) => ({
  display: "flex",
  gap: "20px",
  alignItems: "center",
}));

const Navbar = () => {
  const [rightMenu, setRightMenu] = useState(false);
  return (
    <AppBar position="sticky">
      <StyledToolBar>
        <Icons>
          <BugReportIcon />
          <Typography
            variant="h6"
            sx={{ display: { xs: "none", sm: "block" } }}
          >
            EL FRONT D3V
          </Typography>
        </Icons>

        <Icons>
          <Typography variant="span">Juan Cano</Typography>

          <Avatar
            sx={{ width: 30, height: 30 }}
            src=""
            onClick={() => setRightMenu(true)}
          />
          <Badge badgeContent={4} color={"error"}>
            <NotificationsNoneIcon />
          </Badge>
        </Icons>
      </StyledToolBar>
      <Menu
        id="avatar-menu"
        open={rightMenu}
        onClose={() => setRightMenu(false)}
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
        transformOrigin={{ vertical: "top", horizontal: "right" }}
      >
        <MenuItem>Home</MenuItem>
        <MenuItem>Profile</MenuItem>
        <MenuItem>Logout</MenuItem>
      </Menu>
    </AppBar>
  );
};

export default Navbar;
