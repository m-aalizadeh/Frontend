import { useState } from "react";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Avatar from "@mui/material/Avatar";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";

const settings = ["Logout"];
const Bar = ({ name, avatar_url, navigate, handleDeleteUser }) => {
  const [openMenu, setOpenMenu] = useState(false);

  const handleMenu = (e = {}) => {
    const value = e.target.textContent;
    if (value === "Logout") {
      handleDeleteUser();
      navigate("/");
    }
    setOpenMenu(!openMenu);
  };

  const handleClose = () => {
    setOpenMenu(false);
  };

  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          GitHub
        </Typography>
        <div>
          <IconButton
            size="large"
            aria-label="account of current user"
            aria-controls="menu-appbar"
            aria-haspopup="true"
            onClick={handleMenu}
            color="inherit"
          >
            <Avatar alt={name} src={avatar_url} />
          </IconButton>
          <Menu
            id="menu-appbar"
            anchorOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
            keepMounted
            transformOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
            open={openMenu}
            onClose={handleClose}
          >
            {settings.map((setting) => (
              <MenuItem key={setting} onClick={(e) => handleMenu(e)}>
                <Typography sx={{ textAlign: "center" }}>{setting}</Typography>
              </MenuItem>
            ))}
          </Menu>
        </div>
      </Toolbar>
    </AppBar>
  );
};

Bar.propTypes = {
  name: PropTypes.string,
  avatar_url: PropTypes.string,
  navigate: PropTypes.func,
  handleDeleteUser: PropTypes.func,
};

Bar.defaultProps = {
  name: "",
  avatar_url: "",
  navigate: () => {},
  handleDeleteUser: () => {},
};
export default Bar;
