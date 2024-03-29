import * as React from "react";
import Box from "@mui/material/Box";
import Avatar from "@mui/material/Avatar";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Tooltip from "@mui/material/Tooltip";
import PersonAdd from "@mui/icons-material/PersonAdd";
import Settings from "@mui/icons-material/Settings";
import Logout from "@mui/icons-material/Logout";
import Link from "next/link";
import { useRouter } from "next/router";
import { AuthContext } from "../../context/authContext";

export default function ProfileMenu() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const { user, setUser } = React.useContext(AuthContext);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const router = useRouter();

  const handleSettings = () => {
    switch (user?.userType?.toLowerCase()) {
      case "admin":
        router.push(`/admin/settings/edit-profile`);
        break;
      default:
        console.log("default");
    }
  };

  return (
    <React.Fragment>
      <Box sx={{ display: "flex", alignItems: "center", textAlign: "center" }}>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            textAlign: "center",
          }}
        >
          <Typography sx={{ minWidth: 100, mr: 1 }} variant="body1">
            {user?.details?.firstName} {user?.details?.lastName}
          </Typography>
          <Typography sx={{ minWidth: 100, mr: 1 }} variant="caption">
            {user?.email}
          </Typography>
        </Box>
        <Tooltip title="Account settings">
          <IconButton
            onClick={handleClick}
            size="small"
            sx={{ ml: 2 }}
            aria-controls={open ? "account-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
          >
            <Avatar sx={{ width: 40, height: 40 }} src={user?.details?.image}>
              A
            </Avatar>
          </IconButton>
        </Tooltip>
      </Box>
      <Menu
        anchorEl={anchorEl}
        id="account-menu"
        open={open}
        onClose={handleClose}
        onClick={handleClose}
        PaperProps={{
          elevation: 0,
          sx: {
            overflow: "visible",
            filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
            mt: 1.5,
            "& .MuiAvatar-root": {
              width: 32,
              height: 32,
              ml: -0.5,
              mr: 1,
            },
            "&:before": {
              content: '""',
              display: "block",
              position: "absolute",
              top: 0,
              right: 14,
              width: 10,
              height: 10,
              bgcolor: "background.paper",
              transform: "translateY(-50%) rotate(45deg)",
              zIndex: 0,
            },
          },
        }}
        transformOrigin={{ horizontal: "right", vertical: "top" }}
        anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
      >
        <MenuItem onClick={handleSettings}>
          <ListItemIcon>
            <Settings fontSize="small" sx={{ color: "black" }} />
          </ListItemIcon>
          Settings
        </MenuItem>
        <MenuItem
          sx={{ color: "error.main" }}
          onClick={() => {
            const userType = user?.userType?.toLowerCase();
            localStorage.clear();
            setUser(null);
            if (userType === "admin") {
              router.push("/loginAdmin");
            } else {
              router.push("/login");
            }
          }}
        >
          <ListItemIcon>
            <Logout fontSize="small" sx={{ color: "error.main" }} />
          </ListItemIcon>
          Logout
        </MenuItem>
      </Menu>
    </React.Fragment>
  );
}
