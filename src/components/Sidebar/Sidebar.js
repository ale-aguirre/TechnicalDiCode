import React from "react";
import SidebarIconos from "../SidebarIconos/SidebarIconos";
import HomeIcon from "@material-ui/icons/Home";
import "./Sidebar.css";
import OndemandVideoIcon from "@material-ui/icons/OndemandVideo";
import ThumbUpIcon from "@material-ui/icons/ThumbUp";
import { Link } from "react-router-dom";
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <Link to="/" style={{ color: "inherit", textDecoration: "none" }}>
        <SidebarIconos selected Icon={HomeIcon} title="Principal" />
      </Link>

      <hr className="sidebar__separator" />

      <a
        href="https://www.linkedin.com/in/alexisaguirre-fullstack/"
        target="_blank"
        rel="noreferrer"
        style={{ color: "inherit", textDecoration: "none" }}
      >
        <SidebarIconos Icon={LinkedInIcon} title="Perfil" />
      </a>
      <a
        href="https://github.com/ale-aguirre"
        target="_blank"
        rel="noreferrer"
        style={{ color: "inherit", textDecoration: "none" }}
      >
        <SidebarIconos Icon={GitHubIcon} title="Github" />
      </a>
      <Link to="/under" style={{ color: "inherit", textDecoration: "none" }}>
        <SidebarIconos Icon={OndemandVideoIcon} title="Tus videos" />
      </Link>

      <Link to="/under" style={{ color: "inherit", textDecoration: "none" }}>
        <SidebarIconos Icon={ThumbUpIcon} title="Likes" />
      </Link>

      <hr className="sidebar__separator" />
    </div>
  );
};

export default Sidebar;
