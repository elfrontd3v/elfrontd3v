import React from "react";
import {
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Switch,
  Drawer,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import MenuItems from "./MenuItems";

const Sidebar = ({ visibleDrawer, setVisibleDrawer }) => {
  const navigate = useNavigate();
  const menuItems = MenuItems();

  const menuItemsList = (
    <List>
      {menuItems.map((item) => (
        <ListItem disablePadding key={item.id}>
          <ListItemButton
            onClick={() => {
              setVisibleDrawer(false);
              if (item.navigate) navigate(item.path);
            }}
          >
            <ListItemIcon>{item.icon}</ListItemIcon>
            {item.type === "text" && <ListItemText primary={item.title} />}
            {item.type === "switch" && <Switch />}
          </ListItemButton>
        </ListItem>
      ))}
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
        <Box position={"fixed"}>{menuItemsList}</Box>
      </Box>
      <Drawer
        variant="temporary"
        anchor="left"
        open={visibleDrawer}
        onClose={() => setVisibleDrawer(false)}
      >
        {menuItemsList}
      </Drawer>
    </>
  );
};

export default Sidebar;