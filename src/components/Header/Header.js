import React, { useState } from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import MenuIcon from "@material-ui/icons/Menu";
import SearchIcon from "@material-ui/icons/Search";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import Logout from "../Auth/Login/Logout";
import FaceIcon from "@material-ui/icons/Face";
import { useSelector } from "react-redux";
import { selectUser } from "../Auth/features/userSlice";
import Sidebar from "../Sidebar/Sidebar";

const Header = () => {
  const user = useSelector(selectUser);
  // eslint-disable-next-line
  const [searchMobile, setSearchMobile] = useState("open");
  const [inputSearch, setInputSeach] = useState("");

  // eslint-disable-next-line
  const [open, setOpen] = React.useState(true);

  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);
// eslint-disable-next-line
  const handleDrawerClose = () => {
    setOpen(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };
  const iconFill = {
    fill: "#605951",
  };
  return (
    <div className="header">
      <div className="header__izquierda">
        {/* <Superior /> */}
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
            value={inputSearch}
          />
          <Link to={`/search/${inputSearch}`}>
            <button type="submit">
              <SearchIcon style={iconFill} />
            </button>
          </Link>
        </form>
      </div>

      <div className="header__iconos">
        <Link to="/login" style={{ color: "inherit", textDecoration: "none" }}>
          {user ? (
            <FaceIcon color="primary" />
          ) : (
            <AccountCircleIcon className="header__icono" />
          )}
          {user ? <Logout /> : null}
        </Link>
      </div>

      <div className="navbar">
        <Link to="#" className="menu-bars">
          <MenuIcon onClick={showSidebar} />
        </Link>
      </div>
      <nav className={sidebar ? "nav-menu active" : "nav-menu"}>
        <ul className="nav-menu-items" onClick={showSidebar}>
          <li className="navbar-toggle">
            <Link to="#" className="menu-bars">
              <MenuIcon />
            </Link>
          </li>
          <Sidebar />
        </ul>
      </nav>
    </div>
  );
};

export default Header;
