import React, { useState } from "react";
import clsx from "clsx";
import { fade, makeStyles, useTheme } from "@material-ui/core/styles";
import SearchIcon from "@material-ui/icons/Search";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import Logout from "../Auth/Login/Logout";
import FaceIcon from "@material-ui/icons/Face";
import Drawer from "@material-ui/core/Drawer";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import List from "@material-ui/core/List";
import CssBaseline from "@material-ui/core/CssBaseline";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import VideosRecomendados from "../VideosRecomendados/VideosRecomendados";
import Sidebar from "./Sidebar";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectUser } from "../Auth/features/userSlice";
import { Redirect } from "react-router";
import Fade from "@material-ui/core/Fade";

const drawerWidth = 180;

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    zIndex: 1,
    overflow: "hidden",
    position: "relative",
    display: "flex",
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    background: "white",
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: -15,
  },
  hide: {
    display: "none",
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: "nowrap",
  },
  drawerOpen: {
    width: drawerWidth,
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerClose: {
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: "hidden",
    width: theme.spacing(7) + 1,
    [theme.breakpoints.up("sm")]: {
      width: theme.spacing(9) + 1,
    },
  },
  toolbar: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(1),
  },
  search: {
    flexGrow: 0.5,
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(3),
      width: "auto",
    },
  },
}));

export default function MiniDrawer() {
  const user = useSelector(selectUser);
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);
  // eslint-disable-next-line
  const [searchMobile, setSearchMobile] = useState("open");
  const [inputSearch, setInputSeach] = useState("");

  const handleDrawerOpen = () => {
    setOpen(true);
  };

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
    <Fade in={true}>
    <div className={classes.root}>
      <CssBaseline />
      <AppBar
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            className={clsx(classes.menuButton, {
              [classes.hide]: open,
            })}
          >
            <MenuIcon style={{ cursor: "pointer", color: "black" }} />
          </IconButton>
          <Link to="/" style={{ textDecoration: "none" }}>
            <img
              className="header__logo"
              src="https://i.ibb.co/mcMVvkM/image.png"
              alt="logo"
            />
          </Link>
          <div className={classes.search} />
          <div className="header__searchBox">
            <div
              style={{
                color: "black",
                display: searchMobile === "open" ? "block" : "none",
              }}
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
          </div>
          <div className={classes.root} />
          <div className="header__iconos">
            <Link to="/profile" style={{ color: "black", textDecoration: "none" }}>
              {user ? (
                <FaceIcon color="primary" />
              ) : (
                <AccountCircleIcon className="header__icono" />
              )}
              
              {user ? <Logout /> : <Redirect to="/" />}
            </Link>
          </div>
        </Toolbar>
      </AppBar>
      <Drawer
        variant="permanent"
        className={clsx(classes.drawer, {
          [classes.drawerOpen]: open,
          [classes.drawerClose]: !open,
        })}
        classes={{
          paper: clsx({
            [classes.drawerOpen]: open,
            [classes.drawerClose]: !open,
          }),
        }}
      >
        <div className={classes.toolbar}>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === "rtl" ? <MenuIcon /> : <MenuIcon />}
          </IconButton>
        </div>
        <List>
          <Sidebar />
        </List>
      </Drawer>
      <main className={classes.content}>
        <div className={classes.toolbar} />
        <VideosRecomendados />
      </main>
    </div>
    </Fade>
  );
}
