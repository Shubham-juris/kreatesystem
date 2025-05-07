import React, { useState, useEffect } from "react";
import {
  AppBar, Box, CssBaseline, Divider, Drawer, IconButton, List, ListItem,
  ListItemButton, ListItemText, Toolbar, Typography, Button, Menu, MenuItem,
  useMediaQuery, Container
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import { useTheme } from "@mui/material/styles";
import { keyframes } from "@emotion/react";
import { Link, useLocation } from "react-router-dom";
import kreatelogo from '../../assets/kreatelogo.jpg';

const DRAWER_WIDTH = 245;
const NAV_ITEMS = [
  "Home", "About", "SERVICES", "SOLUTIONS", "Contact Us", "CASE STUDIES", "Careers"
];

const slideDown = keyframes`
  from { transform: translateY(-100%); opacity: 0; }
  to { transform: translateY(0); opacity: 1; }
`;

function Navbar({ window }) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [anchorElServices, setAnchorElServices] = useState(null);
  const [anchorElSolutions, setAnchorElSolutions] = useState(null);
  const [anchorElCaseStudies, setAnchorElCaseStudies] = useState(null);

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const location = useLocation();

  useEffect(() => {
    setAnchorElServices(null);
    setAnchorElSolutions(null);
    setAnchorElCaseStudies(null);
    setMobileOpen(false);
  }, [location]);

  const handleDrawerToggle = () => setMobileOpen(prev => !prev);

  const handleMenuOpen = (event, type) => {
    if (type === "SERVICES") setAnchorElServices(event.currentTarget);
    if (type === "SOLUTIONS") setAnchorElSolutions(event.currentTarget);
    if (type === "CASE STUDIES") setAnchorElCaseStudies(event.currentTarget);
  };

  const handleMenuClose = (type) => {
    if (type === "SERVICES") setAnchorElServices(null);
    if (type === "SOLUTIONS") setAnchorElSolutions(null);
    if (type === "CASE STUDIES") setAnchorElCaseStudies(null);
  };

  const navButtonStyle = (path) => ({
    color: location.pathname === path ? "#ff6b6b" : "#283878",
    fontWeight: "bold",
    fontSize: "1rem",
    textTransform: "uppercase",
    borderBottom: location.pathname === path ? "3px solid #ff6b6b" : "none",
    mx: 1
  });

  const menuItemStyle = (path) => ({
    color: location.pathname === path ? "#ff6b6b" : "#fff",
    fontWeight: location.pathname === path ? "bold" : "normal",
    backgroundColor: location.pathname === path ? "rgba(255, 107, 107, 0.1)" : "transparent",
    "&:hover": {
      backgroundColor: "rgba(255, 255, 255, 0.1)"
    }
  });

  const menuStyle = {
    "& .MuiPaper-root": {
      backgroundColor: "#111",
      color: "#fff",
      borderRadius: "6px",
      minWidth: "220px"
    }
  };

  const drawerContent = (
    <Box sx={{ textAlign: "left", p: 2 }}>
      <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", mb: 2 }}>
        <Typography
          variant="h6"
          component={Link}
          to="/"
          sx={{
            display: "flex", alignItems: "center", gap: 1,
            textDecoration: "none", color: "#283878", fontWeight: "bold"
          }}
        >
          <img src={kreatelogo} alt="Logo" style={{ width: 40, height: 40, borderRadius: "50%" }} />
          Kreatesystem
        </Typography>
        <IconButton onClick={handleDrawerToggle}><CloseIcon sx={{ color: "#283878" }} /></IconButton>
      </Box>
      <Divider />
      <List>
        {NAV_ITEMS.map((item) => (
          <ListItem key={item} disablePadding>
            {["SERVICES", "SOLUTIONS", "CASE STUDIES"].includes(item) ? (
              <>
                <ListItemButton onClick={(e) => handleMenuOpen(e, item)}>
                  <ListItemText primary={item} primaryTypographyProps={{
                    fontWeight: "bold", fontSize: "1.2rem", color: "#283878"
                  }} />
                  {(item === "SERVICES" && Boolean(anchorElServices)) ||
                    (item === "SOLUTIONS" && Boolean(anchorElSolutions)) ||
                    (item === "CASE STUDIES" && Boolean(anchorElCaseStudies))
                    ? <ExpandLessIcon /> : <ExpandMoreIcon />}
                </ListItemButton>
                <Menu
                  anchorEl={
                    item === "SERVICES" ? anchorElServices :
                      item === "SOLUTIONS" ? anchorElSolutions :
                        anchorElCaseStudies
                  }
                  open={
                    item === "SERVICES" ? Boolean(anchorElServices) :
                      item === "SOLUTIONS" ? Boolean(anchorElSolutions) :
                        Boolean(anchorElCaseStudies)
                  }
                  onClose={() => handleMenuClose(item)}
                  sx={menuStyle}
                >
                  {item === "SERVICES" && (
                    <>
                      <MenuItem component={Link} to="/businessheader" sx={menuItemStyle("/businessheader")}>Business Process</MenuItem>
                      <MenuItem component={Link} to="/consultingservices" sx={menuItemStyle("/consultingservices")}>Consulting Service</MenuItem>
                      <MenuItem component={Link} to="/digitalmarketing" sx={menuItemStyle("/digitalmarketing")}>Digital Marketing</MenuItem>
                      <MenuItem component={Link} to="/graphicdesign" sx={menuItemStyle("/graphicdesign")}>Graphic Design</MenuItem>
                      <MenuItem component={Link} to="/UiUxDesign" sx={menuItemStyle("/UiUxDesign")}>UI/UX Design</MenuItem>
                      <MenuItem component={Link} to="/webdevelopement" sx={menuItemStyle("/webdevelopement")}>Web Development</MenuItem>
                    </>
                  )}
                  {item === "SOLUTIONS" && (
                    <>
                      <MenuItem component={Link} to="/ecommerceheader" sx={menuItemStyle("/ecommerceheader")}>E-commerce Solutions</MenuItem>
                      <MenuItem component={Link} to="/softwaresolutionssection" sx={menuItemStyle("/softwaresolutionssection")}>Software Development</MenuItem>
                    </>
                  )}
                  {item === "CASE STUDIES" && (
                    <MenuItem component={Link} to="/" sx={menuItemStyle("/")}>IT Cases</MenuItem>
                  )}
                </Menu>
              </>
            ) : (
              <ListItemButton component={Link} to={`/${item.toLowerCase().replace(/\s+/g, "")}`}>
                <ListItemText
                  primary={item}
                  primaryTypographyProps={{
                    fontWeight: "bold", fontSize: "1.2rem", color: "#283878"
                  }}
                />
              </ListItemButton>
            )}
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        component="nav"
        position="fixed"
        sx={{
          backgroundColor: "#fff",
          animation: `${slideDown} 0.8s ease-out`,
          boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
          borderBottom: "3px solid #283878"
        }}
      >
        <Container maxWidth="lg">
          <Toolbar sx={{ justifyContent: "space-between" }}>
            {isMobile && (
              <IconButton onClick={handleDrawerToggle}>
                <MenuIcon sx={{ color: "#283878", fontSize: "2rem" }} />
              </IconButton>
            )}
            <Typography
              variant="h6"
              component={Link}
              to="/"
              sx={{
                display: "flex", alignItems: "center", textDecoration: "none",
                color: "#283878", fontWeight: "bold", gap: 1
              }}
            >
              <img src={kreatelogo} alt="Logo" style={{ width: 40, height: 40, borderRadius: "50%" }} />
              Kreatesystem
            </Typography>
            {!isMobile && (
              <Box sx={{ display: "flex", alignItems: "center" }}>
                {NAV_ITEMS.map((item) =>
                  ["SERVICES", "SOLUTIONS", "CASE STUDIES"].includes(item) ? (
                    <Box key={item}>
                      <Button onClick={(e) => handleMenuOpen(e, item)} sx={navButtonStyle("")}>
                        {item}
                        {(item === "SERVICES" && Boolean(anchorElServices)) ||
                          (item === "SOLUTIONS" && Boolean(anchorElSolutions)) ||
                          (item === "CASE STUDIES" && Boolean(anchorElCaseStudies)) ?
                          <ExpandLessIcon /> : <ExpandMoreIcon />}
                      </Button>
                      <Menu
                        anchorEl={
                          item === "SERVICES" ? anchorElServices :
                            item === "SOLUTIONS" ? anchorElSolutions :
                              anchorElCaseStudies
                        }
                        open={
                          item === "SERVICES" ? Boolean(anchorElServices) :
                            item === "SOLUTIONS" ? Boolean(anchorElSolutions) :
                              Boolean(anchorElCaseStudies)
                        }
                        onClose={() => handleMenuClose(item)}
                        sx={menuStyle}
                      >
                        {/* Same MenuItems as above */}
                      </Menu>
                    </Box>
                  ) : (
                    <Button
                      key={item}
                      component={Link}
                      to={`/${item.toLowerCase().replace(/\s+/g, "")}`}
                      sx={navButtonStyle(`/${item.toLowerCase().replace(/\s+/g, "")}`)}
                    >
                      {item}
                    </Button>
                  )
                )}
              </Box>
            )}
          </Toolbar>
        </Container>
      </AppBar>
      <Box component="nav">
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{ keepMounted: true }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: DRAWER_WIDTH,
              backgroundColor: "#f5f5f5"
            }
          }}
        >
          {drawerContent}
        </Drawer>
      </Box>
    </Box>
  );
}

export default Navbar;
