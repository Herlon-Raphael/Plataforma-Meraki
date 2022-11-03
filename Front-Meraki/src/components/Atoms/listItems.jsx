import * as React from "react";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import DashboardIcon from "@mui/icons-material/Dashboard";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import SchoolIcon from "@mui/icons-material/School";
import ContactSupportIcon from "@mui/icons-material/ContactSupport";
import { Link } from "react-router-dom";

export const mainListItems = (
  <React.Fragment>
    <Link to={"/"}>
      <ListItemButton>
        <ListItemIcon>
          <DashboardIcon />
        </ListItemIcon>
        <ListItemText primary="Dashboard" />
      </ListItemButton>
    </Link>
    <Link to={"/profile"}>
      <ListItemButton>
        <ListItemIcon>
          <AccountCircleIcon />
        </ListItemIcon>
        <ListItemText primary="Profile" />
      </ListItemButton>
    </Link>
    <Link to={"/classes"}>
      <ListItemButton>
        <ListItemIcon>
          <SchoolIcon />
        </ListItemIcon>
        <ListItemText primary="Área de Ensino" />
      </ListItemButton>
    </Link>
    <Link to={"/suport"}>
      <ListItemButton>
        <ListItemIcon>
          <ContactSupportIcon />
        </ListItemIcon>
        <ListItemText primary="Suporte" />
      </ListItemButton>
    </Link>
  </React.Fragment>
);
