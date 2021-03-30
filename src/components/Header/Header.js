import React, { useState } from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import MenuIcon from "@material-ui/icons/Menu";
import SearchIcon from "@material-ui/icons/Search";
import VideoCallIcon from "@material-ui/icons/VideoCall";
import AppsIcon from "@material-ui/icons/Apps";
import NotificationsIcon from "@material-ui/icons/Notifications";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import Logout from "../Auth/Login/Logout";
import FaceIcon from "@material-ui/icons/Face";

import { useSelector } from "react-redux";
import { selectUser } from "../Auth/features/userSlice";

const Header = () => {
  const user = useSelector(selectUser);
  const [searchMobile, setSearchMobile] = useState("closed");
  const [inputSearch, setInputSeach] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
  };
  const iconFill = {
    fill: "#605951",
  };
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
      <div
        className="header__searchBox"
        style={{ display: searchMobile === "open" ? "block" : "none" }}
      >
        <form onSubmit={handleSubmit}>
          <input 
          placeholder="Buscar" 
          type="text"
          onChange={(e) => setInputSeach(e.target.value)}
          value={inputSearch} />
          <Link to={`/search/${inputSearch}`}>
            <button type="submit">
              <SearchIcon style={iconFill} />
            </button>
          </Link>
        </form>
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
          {user ? (
            <FaceIcon color="primary" />
          ) : (
            <AccountCircleIcon className="header__icono" />
          )}
          {user ? <Logout /> : null}
        </Link>
      </div>
    </div>
  );
};

export default Header;
