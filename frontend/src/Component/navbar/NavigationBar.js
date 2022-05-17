import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
// import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../redux/actions/useraction";


const pages = ["Home", "Products","Users"];
const settings = ["Profile", "Account", "Dashboard", "Logout"];
const settingsGuest = ["Login", "Register"];

const NavigationBar = () => {
  const dispatch = useDispatch();
  const currentUser = useSelector((state) => state.userReducer.currentUser);
  const token = localStorage.getItem("token");
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };
  const handleCloseUserMenuLog = () => {
    dispatch(logout());

    setAnchorElUser(null);
  };

  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ mr: 2, display: { xs: "none", md: "flex" } }}
          >
            <Link to="/"> {currentUser && currentUser.fullName}</Link>
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
             icon
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              {pages.map((page) =>
                currentUser &&  currentUser.role === "admin" &&  page === "Users"   ? 
                 (
                   <Link to="/UserList">
                    <MenuItem key={page} onClick={handleCloseNavMenu}>
                       <Typography textAlign="center">{page}</Typography>
                     </MenuItem>
                   </Link>
                 ):
                page === "Home" ? (
                  <Link to="/">
                    {" "}
                    <MenuItem key={page} onClick={handleCloseNavMenu}>
                      <Typography textAlign="center">{page}</Typography>
                    </MenuItem>
                  </Link>
                ) 
               
                : (
                  <Link to="/productList">
                    {" "}
                    <MenuItem key={page} onClick={handleCloseNavMenu}>
                      <Typography textAlign="center">{page}</Typography>
                    </MenuItem>
                  </Link>
                )
              )}
            </Menu>
          </Box>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}
          >
            {" "}
            <Link to="/"> {currentUser && currentUser.fullName}</Link>
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            {pages.map((page) => (
              <Button
                key={page}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: "white", display: "block" }}
              >
               { page === "Home" ? (
                  <Link to="/">
                    {" "}
                    {page}
                  </Link>
                ) : page === "Users" && currentUser && currentUser.role==="admin"  ? 
                (
                  <Link to="/UserList">
                    {page}
                  </Link>
                )
                :
                 (
                  <Link to="/productList">
                    {page}
                  </Link>
                )}
              </Button>
            ))}
          </Box>
          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar
                  alt="Remy Sharp"
                  src="https://i.pinimg.com/736x/4b/cd/33/4bcd33ca4155ff5519bf8019a955ba73.jpg"
                />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: "45px" }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {token
                ? settings.map((el) =>
                    el === "Logout" ? (
                      <Link to="/login">
                        {" "}
                        <MenuItem key={el} onClick={handleCloseUserMenuLog}>
                          <Typography textAlign="center">{el}</Typography>
                        </MenuItem>
                      </Link>
                    ) : el === "Dashboard" ? (
                      <Link
                        to={
                          currentUser.role === "admin"
                            ? "/dachboardAdmin"
                            : "/dachboardClient"
                        }
                      >
                        <MenuItem key={el} onClick={handleCloseUserMenu}>
                          <Typography textAlign="center">{el}</Typography>
                        </MenuItem>
                      </Link>
                    ) : (
                      <MenuItem key={el} onClick={handleCloseUserMenu}>
                        <Typography textAlign="center">{el}</Typography>
                      </MenuItem>
                    )
                  )
                : settingsGuest.map((el) =>
                    el === "Login" ? (
                      <Link to="/login">
                        <MenuItem key={el} onClick={handleCloseUserMenuLog}>
                          <Typography textAlign="center"> {el}</Typography>
                        </MenuItem>
                      </Link>
                    ) : (
                      <Link to="/register">
                        {" "}
                        <MenuItem key={el} onClick={handleCloseUserMenu}>
                          <Typography textAlign="center"> {el}</Typography>
                        </MenuItem>
                      </Link>
                    )
                  )}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default NavigationBar;