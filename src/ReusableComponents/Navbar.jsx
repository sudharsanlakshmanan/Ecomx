import { Link, Navigate } from "react-router-dom";
import "../ReusableComponents/Navbar.css";
import CartContext from "../Context/CartContext";
import { useContext } from "react";
import logo from "../assets/logo-ecommx.png";
import SearchButton from "./SearchButton";
import AuthContext from "../Context/AuthContext";
import { Button } from "@mui/material";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import Badge from "@mui/material/Badge";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import Box from "@mui/material/Box";

const Navbar = () => {
  const { totalCartCount } = useContext(CartContext);

  const { isUserLoggedIn, logout } = useContext(AuthContext);

  const handleLogout = () => {
    const confirm = window.confirm("Are you sure you want to logout?");
    if (confirm) {
      logout();
      Navigate("/");
    }
  };

  return (
    <AppBar position="static" color="inherit" elevation={1}>
      <Toolbar
        sx={{
          display: "flex",
          justifyContent: "space-between",
          flexWrap: "wrap",
        }}
      >
        {/* LOGO AREA */}
        <Typography
          variant="h6"
          component="div"
          sx={{ fontWeight: "bold", color: "primary.main" }}
        >
          <Link to="/" className="logoStyle">
            <img
              src={logo}
              alt="Logo"
              style={{ width: "100px", height: "50px" }}
            />
          </Link>
        </Typography>

        {/* SEARCH BAR (Responsive) */}
        <Box
          sx={{ flexGrow: 1, display: "flex", justifyContent: "center", mx: 2 }}
        >
          <SearchButton />
        </Box>

        {/* RIGHT ACTIONS */}
        <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
          {isUserLoggedIn ? (
            <>
              <Button
                variant="contained"
                color="primary"
                onClick={handleLogout}
              >
                Logout
              </Button>
              <IconButton aria-label="cart">
                <Link to="/Cart">
                <Badge badgeContent={totalCartCount} color="error">
                    <ShoppingCartIcon />
                </Badge>
                </Link>
              </IconButton>
            </>
          ) : (
            <Button
              variant="contained"
              color="primary"
              component={Link}
              to="/Login"
            >
              Login
            </Button>
          )}
        </Box>
      </Toolbar>
    </AppBar>
  );
};
export default Navbar;
