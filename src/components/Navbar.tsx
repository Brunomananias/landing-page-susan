import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Box,
  Button,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import Logo from "../assets/images/logo.png";

const Navbar: React.FC = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const menuItems = [
    { label: "Sobre", href: "#sobre" },
    { label: "Serviços", href: "#servicos" },
    { label: "Planos", href: "#planos" },
    { label: "Contato", href: "#contato" },
  ];

  const drawer = (
  <Box sx={{ textAlign: "center" }}>
    <img
      src={Logo}
      alt="Logo"
      style={{ height: 50, margin: "20px auto", display: "block" }}
    />
    <List>
      {menuItems.map((item) => (
        <ListItem key={item.label} disablePadding>
          <ListItemButton
            component="a"
            href={item.href}
            sx={{ textAlign: "center" }}
            onClick={handleDrawerToggle} // 👈 fecha só quando clica no link
          >
            <ListItemText primary={item.label} />
          </ListItemButton>
        </ListItem>
      ))}
    </List>
  </Box>
);


  return (
    <>
      <AppBar position="fixed" color="default" elevation={4}>
        <Toolbar>
          {/* Logo */}
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <img
              src={Logo}
              alt="Logo"
              style={{ height: 60, width: 280, marginRight: 30 }}
            />
          </Box>

          {/* Espaço entre logo e menu */}
          <Box sx={{ flexGrow: 1 }} />

          {/* Menu desktop */}
          <Box sx={{ display: { xs: "none", md: "flex" }, gap: 2 }}>
            {menuItems.map((item) => (
              <Button
                key={item.label}
                href={item.href}
                color="inherit"
                sx={{
                  fontWeight: "bold",
                  "&:hover": { color: "green" },
                }}
              >
                {item.label}
              </Button>
            ))}
          </Box>

          {/* Menu mobile */}
          <Box sx={{ display: { xs: "flex", md: "none" } }}>
            <IconButton
              color="inherit"
              edge="start"
              onClick={handleDrawerToggle}
            >
              <MenuIcon />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>

      <Drawer
        anchor="right"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        sx={{
          "& .MuiDrawer-paper": { width: 250, boxSizing: "border-box" },
        }}
      >
        {drawer}
      </Drawer>
    </>
  );
};

export default Navbar;
