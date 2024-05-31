import React, { useState } from "react";
import {
  Box,
  AppBar,
  Typography,
  Toolbar,
  IconButton,
  Drawer,
  Divider,
} from "@mui/material";
import FastfoodIcon from "@mui/icons-material/Fastfood";
import MenuIcon from "@mui/icons-material/Menu";
import { NavLink } from "react-router-dom";
import "../../styles/HeaderStyle.css";
const Header = () => {
  const [mobileOpen, setmobileOpen] = useState(false);
  const handleToggleDrawer = () => {
    setmobileOpen(!mobileOpen);
  };
  const drawer = (
    <Box onClick={handleToggleDrawer} sx={{ textAlign: "center" }}>
      <Typography
        color={"goldenrod"}
        variant="paragraph"
        component={"div"}
        sx={{ flexGrow: 1, my: 2 }}
      >
        <FastfoodIcon />
        My Restaurant
      </Typography>
      <Divider />
      <ul className="mobile-navigation">
        <li>
          <NavLink to={`/`}>Home</NavLink>
        </li>
        <li>
          <NavLink to={`/about`}>About</NavLink>
        </li>
        <li>
          <NavLink to={`/menu`}>Menu</NavLink>
        </li>
        <li>
          <NavLink to={`/contact`}>Contact</NavLink>
        </li>
      </ul>
    </Box>
  );
  return (
    <div>
      <Box>
        <AppBar component={"nav"} sx={{ bgcolor: "black" }}>
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              sx={{ mr: 2, display: { sm: "none" } }}
              onClick={handleToggleDrawer}
            >
              <MenuIcon />
            </IconButton>
            <Typography
              color={"goldenrod"}
              variant="h6"
              component={"div"}
              sx={{ flexGrow: 1 }}
            >
              <FastfoodIcon />
              My Restaurant
            </Typography>
            <Box sx={{ display: { xs: "none", sm: "block" } }}>
              <ul className="navigation-menu">
                <li>
                  <NavLink to={`/`}>Home</NavLink>
                </li>
                <li>
                  <NavLink to={`/about`}>About</NavLink>
                </li>
                <li>
                  <NavLink to={`/menu`}>Menu</NavLink>
                </li>
                <li>
                  <NavLink to={`/contact`}>Contact</NavLink>
                </li>
              </ul>
            </Box>
          </Toolbar>
        </AppBar>
        <Box component={"nav"}>
          <Drawer
            open={mobileOpen}
            onClose={handleToggleDrawer}
            variant="temporary"
            sx={{
              display: { xs: "block", sm: "none" },
            }}
          >
            {drawer}
          </Drawer>
        </Box>
        <Box sx={{ padding: "2px" }}>
          <Toolbar />
        </Box>
      </Box>
    </div>
  );
};

export default Header;
