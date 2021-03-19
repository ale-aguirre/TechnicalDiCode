import React from "react";
import "./Header.css";
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
        <img
          className="header__logo"
          src="https://i.ibb.co/mcMVvkM/image.png"
          alt="logo"
        />
      </div>
      <div className="header__input">
        <input placeholder="Buscar" type="text" />
        <SearchIcon className="header__buscador" />
      </div>

      <div className="header__iconos">
        <VideoCallIcon className="header__icono"/>
        <AppsIcon className="header__icono" />
        <NotificationsIcon className="header__icono"/>
        <AccountCircleIcon className="header__icono"/>
      </div>
    </div>
  );
};

export default Header;
