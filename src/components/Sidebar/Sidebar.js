import React from "react";
import SidebarIconos from "../SidebarIconos/SidebarIconos";
import WhatshotIcon from "@material-ui/icons/Whatshot";
import HomeIcon from "@material-ui/icons/Home";
import SubscriptionsIcon from "@material-ui/icons/Subscriptions";
import "./Sidebar.css";
import VideoLibraryIcon from "@material-ui/icons/VideoLibrary";
import HistoryIcon from "@material-ui/icons/History";
import OndemandVideoIcon from "@material-ui/icons/OndemandVideo";
import WatchLaterIcon from "@material-ui/icons/WatchLater";
import ThumbUpIcon from "@material-ui/icons/ThumbUp";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <SidebarIconos selected Icon={HomeIcon} title="Principal" />
      <Link to="/under" style={{ color: "inherit", textDecoration: "none" }}>
        <SidebarIconos Icon={WhatshotIcon} title="Tendencias" />
      </Link>
      <Link to="/under" style={{ color: "inherit", textDecoration: "none" }}>
        <SidebarIconos Icon={SubscriptionsIcon} title="Subscripciones" />
      </Link>
      <hr className="sidebar__separator"/>
      <Link to="/under" style={{ color: "inherit", textDecoration: "none" }}>
        <SidebarIconos Icon={VideoLibraryIcon} title="Biblioteca" />
      </Link>
      <Link to="/under" style={{ color: "inherit", textDecoration: "none" }}>
        <SidebarIconos Icon={HistoryIcon} title="Historial" />
      </Link>
      <Link to="/under" style={{ color: "inherit", textDecoration: "none" }}>
        <SidebarIconos Icon={OndemandVideoIcon} title="Tus videos" />
      </Link>
      <Link to="/under" style={{ color: "inherit", textDecoration: "none" }}>
        <SidebarIconos Icon={WatchLaterIcon} title="Ver mas tarde" />
      </Link>
      <Link to="/under" style={{ color: "inherit", textDecoration: "none" }}>
        <SidebarIconos Icon={ThumbUpIcon} title="Videos que me gustan" />
      </Link>
      <Link to="/under" style={{ color: "inherit", textDecoration: "none" }}>
        <SidebarIconos Icon={ExpandMoreIcon} title="Ver mas" />
      </Link>
      <hr className="sidebar__separator"/>
    </div>
  );
};

export default Sidebar;
