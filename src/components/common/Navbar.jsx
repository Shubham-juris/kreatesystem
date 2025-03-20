// import * as React from "react";
// import {
//   AppBar,
//   Box,
//   CssBaseline,
//   Divider,
//   Drawer,
//   IconButton,
//   List,
//   ListItem,
//   ListItemButton,
//   ListItemText,
//   Toolbar,
//   Typography,
//   Button,
//   Menu,
//   MenuItem,
//   useMediaQuery,
// } from "@mui/material";
// import MenuIcon from "@mui/icons-material/Menu";
// import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
// import { useTheme } from "@mui/material/styles";
// import { keyframes } from "@emotion/react";
// import { Link } from "react-router-dom";

// const drawerWidth = 240;
// // const navItems = ["Home", "About", "Services", "Solutions", "Case Studies", "Contact Us", "Careers"];
// const navItems = ["Home", "About", "Services", "Solutions", "Case Studies", "Contact Us", "Careers"];

// const slideDown = keyframes`
//   from { transform: translateY(-100%); opacity: 0; }
//   to { transform: translateY(0); opacity: 1; }
// `;

// function Navbar(props) {
//   const { window } = props;
//   const [mobileOpen, setMobileOpen] = React.useState(false);
//   const theme = useTheme();
//   const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

//   // Dropdown State
//   const [anchorElServices, setAnchorElServices] = React.useState(null);
//   const [anchorElSolutions, setAnchorElSolutions] = React.useState(null);
//   const [anchorElCaseStudies, setAnchorElCaseStudies] = React.useState(null);

//   const handleDrawerToggle = () => {
//     setMobileOpen((prevState) => !prevState);
//   };

//   // Handlers for Dropdowns
//   const handleMenuOpen = (event, setAnchorEl) => {
//     setAnchorEl(event.currentTarget);
//   };
//   const handleMenuClose = (setAnchorEl) => {
//     setAnchorEl(null);
//   };

//   const drawer = (
//     <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
//       <Typography variant="h6" sx={{ my: 2, color: "#283878", fontWeight: "bold" }}>
//         Kreatesystem
//       </Typography>
//       <Divider />
//       <List>
//         {navItems.map((item) => (
//           <ListItem key={item} disablePadding>
//             <ListItemButton component={Link} to={`/${item.toLowerCase().replace(/\s+/g, "")}`} sx={{ textAlign: "center" }}>
//               <ListItemText
//                 primary={item}
//                 primaryTypographyProps={{
//                   fontSize: "1.3rem",
//                   fontWeight: "bold",
//                   color: "#283878",
//                   textTransform: "uppercase",
//                 }}
//               />
//             </ListItemButton>
//           </ListItem>
//         ))}
//       </List>
//     </Box>
//   );

//   const container = window !== undefined ? () => window().document.body : undefined;

//   return (
//     <Box sx={{ display: "flex" }}>
//       <CssBaseline />
//       <AppBar
//         position="fixed"
//         style={{ backgroundColor: "#fff" }}
//         component="nav"
//         sx={{
//           animation: `${slideDown} 0.8s ease-out`,
//           boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
//           borderBottom: "3px solid #283878",
//         }}
//       >
//         <Toolbar>
//           {isMobile && (
//             <IconButton color="inherit" edge="start" onClick={handleDrawerToggle} sx={{ mr: 2 }}>
//               <MenuIcon sx={{ color: "#283878", fontSize: "2rem" }} />
//             </IconButton>
//           )}

//           <Typography variant="h5" fontWeight="bold" component="div" sx={{ color: "#283878", flexGrow: 1 }}>
//             Kreatesystem
//           </Typography>

//           {!isMobile && (
//             <Box sx={{ display: "flex" }}>
//               {/* Home */}
//               <Button component={Link} to="/" sx={navButtonStyle}>
//                 Home
//               </Button>

//               {/* About */}
//               <Button component={Link} to="/about" sx={navButtonStyle}>
//                 About
//               </Button>

//               {/* Services Dropdown */}
//               <Button sx={navButtonStyle} onClick={(e) => handleMenuOpen(e, setAnchorElServices)}>
//                 Services <ArrowDropDownIcon />
//               </Button>
//               <Menu anchorEl={anchorElServices} open={Boolean(anchorElServices)} onClose={() => handleMenuClose(setAnchorElServices)}>
//                 {["Business Process", "Consulting Service", "Digital Marketing", "Graphic Design", "UI / UX Design", "Web Development"].map((service) => (
//                   <MenuItem key={service} component={Link} to={`/services/${service.toLowerCase().replace(/\s+/g, "")}`}>
//                     {service}
//                   </MenuItem>
//                 ))}
//               </Menu>

//               {/* Solutions Dropdown */}
//               <Button sx={navButtonStyle} onClick={(e) => handleMenuOpen(e, setAnchorElSolutions)}>
//                 Solutions <ArrowDropDownIcon />
//               </Button>
//               <Menu anchorEl={anchorElSolutions} open={Boolean(anchorElSolutions)} onClose={() => handleMenuClose(setAnchorElSolutions)}>
//                 {["E-commerce Solutions", "Software Development"].map((solution) => (
//                   <MenuItem key={solution} component={Link} to={`/solutions/${solution.toLowerCase().replace(/\s+/g, "")}`}>
//                     {solution}
//                   </MenuItem>
//                 ))}
//               </Menu>

//               {/* Case Studies Dropdown */}
//               <Button sx={navButtonStyle} onClick={(e) => handleMenuOpen(e, setAnchorElCaseStudies)}>
//                 Case Studies <ArrowDropDownIcon />
//               </Button>
//               <Menu anchorEl={anchorElCaseStudies} open={Boolean(anchorElCaseStudies)} onClose={() => handleMenuClose(setAnchorElCaseStudies)}>
//                 <MenuItem component={Link} to="/casestudies/itcases">IT Cases</MenuItem>
//               </Menu>

//               {/* Contact Us */}
//               <Button component={Link} to="/contactus" sx={navButtonStyle}>
//                 Contact Us
//               </Button>

//               {/* Careers */}
//               <Button component={Link} to="/careers" sx={navButtonStyle}>
//                 Careers
//               </Button>
//             </Box>
//           )}
//         </Toolbar>
//       </AppBar>

//       <nav>
//         <Drawer
//           container={container}
//           variant="temporary"
//           anchor="left"
//           open={mobileOpen}
//           onClose={handleDrawerToggle}
//           ModalProps={{ keepMounted: true }}
//           sx={{
//             display: { xs: "block", sm: "none" },
//             "& .MuiDrawer-paper": {
//               boxSizing: "border-box",
//               width: drawerWidth,
//               background: "#f8f9fa",
//             },
//           }}
//         >
//           {drawer}
//         </Drawer>
//       </nav>
//     </Box>
//   );
// }

// // Styling for Navbar buttons
// const navButtonStyle = {
//   color: "#283878",
//   fontSize: "1rem",
//   fontWeight: "bold",
//   mx: 1,
//   textTransform: "uppercase",
//   position: "relative",
//   "&:hover": {
//     color: "#ff6b6b",
//     "&::after": {
//       content: '""',
//       position: "absolute",
//       width: "100%",
//       height: "3px",
//       backgroundColor: "#ff6b6b",
//       bottom: "-6px",
//       left: 0,
//     },
//   },
// };

// export default Navbar;
 


import * as React from "react";
import {
  AppBar,
  Box,
  CssBaseline,
  Divider,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Toolbar,
  Typography,
  Button,
  useMediaQuery,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { useTheme } from "@mui/material/styles";
import { keyframes } from "@emotion/react";
import { Link } from "react-router-dom";

const drawerWidth = 240;
const navItems = ["Home", "About", "Contact Us", "Careers"];

const slideDown = keyframes`
  from { transform: translateY(-100%); opacity: 0; }
  to { transform: translateY(0); opacity: 1; }
`;

function Navbar(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Typography variant="h6" sx={{ my: 2, color: "#283878", fontWeight: "bold" }}>
        Kreatesystem
      </Typography>
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem key={item} disablePadding>
            <ListItemButton component={Link} to={`/${item.toLowerCase().replace(/\s+/g, "")}`} sx={{ textAlign: "center" }}>
              <ListItemText
                primary={item}
                primaryTypographyProps={{
                  fontSize: "1.3rem",
                  fontWeight: "bold",
                  color: "#283878",
                  textTransform: "uppercase",
                }}
              />
            </ListItemButton>
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
        position="fixed"
        style={{ backgroundColor: "#fff" }}
        component="nav"
        sx={{
          animation: `${slideDown} 0.8s ease-out`,
          boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
          borderBottom: "3px solid #283878",
        }}
      >
        <Toolbar>
          {isMobile && (
            <IconButton color="inherit" edge="start" onClick={handleDrawerToggle} sx={{ mr: 2 }}>
              <MenuIcon sx={{ color: "#283878", fontSize: "2rem" }} />
            </IconButton>
          )}

          <Typography variant="h5" fontWeight="bold" component="div" sx={{ color: "#283878", flexGrow: 1 }}>
            Kreatesystem
          </Typography>

          {!isMobile && (
            <Box sx={{ display: "flex" }}>
              <Button component={Link} to="/" sx={navButtonStyle}>
                Home
              </Button>
              <Button component={Link} to="/about" sx={navButtonStyle}>
                About
              </Button>
              <Button component={Link} to="/contactus" sx={navButtonStyle}>
                Contact Us
              </Button>
              <Button component={Link} to="/careers" sx={navButtonStyle}>
                Careers
              </Button>
            </Box>
          )}
        </Toolbar>
      </AppBar>

      <nav>
        <Drawer
          container={container}
          variant="temporary"
          anchor="left"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{ keepMounted: true }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
              background: "#f8f9fa",
            },
          }}
        >
          {drawer}
        </Drawer>
      </nav>
    </Box>
  );
}

const navButtonStyle = {
  color: "#283878",
  fontSize: "1rem",
  fontWeight: "bold",
  mx: 1,
  textTransform: "uppercase",
  position: "relative",
  "&:hover": {
    color: "#ff6b6b",
    "&::after": {
      content: '""',
      position: "absolute",
      width: "100%",
      height: "3px",
      backgroundColor: "#ff6b6b",
      bottom: "-6px",
      left: 0,
    },
  },
};

export default Navbar;