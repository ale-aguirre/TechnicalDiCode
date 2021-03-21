import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import MenuIcon from "@material-ui/icons/Menu";
import SearchIcon from "@material-ui/icons/Search";
import VideoCallIcon from "@material-ui/icons/VideoCall";
import AppsIcon from "@material-ui/icons/Apps";
import NotificationsIcon from "@material-ui/icons/Notifications";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";

const Header = () => {
  return (
    <div className="header">
      <div className="header__izquierda">
        <MenuIcon />
        <Link to="/" style={{ textDecoration: "none" }}>
          <img
            className="header__logo"
            src="https://i.ibb.co/mcMVvkM/image.png"
            alt="logo"
          />
        </Link>
      </div>
      <div className="header__input">
        <input placeholder="Buscar" type="text" />
        <SearchIcon className="header__buscador" />
      </div>

      <div className="header__iconos">
        <Link to="/under" style={{ color: "inherit", textDecoration: "none" }}>
          <VideoCallIcon className="header__icono" />
        </Link>
        <Link to="/under" style={{ color: "inherit", textDecoration: "none" }}>
          <AppsIcon className="header__icono" />
        </Link>
        <Link to="/under" style={{ color: "inherit", textDecoration: "none" }}>
          <NotificationsIcon className="header__icono" />
        </Link>
        <Link to="/login" style={{ color: "inherit", textDecoration: "none" }}>
          <AccountCircleIcon className="header__icono" />
        </Link>
      </div>
    </div>
  );
};

export default Header;
