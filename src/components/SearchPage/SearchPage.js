import React, { useState, useEffect } from "react";
import axios from "axios";
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
import Sidebar from "../Sidebar/Sidebar";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectUser } from "../Auth/features/userSlice";
import { Redirect } from "react-router";
import VideoResult from "./../VideoResult/VideoResult";
import { key } from "./../../Utilities";
import "./SearchPage.css";

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

const SearchPage = (props) => {
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
  const [resultVideos, setResultVideos] = useState([]);
  const query = props.match.params.searchterm;
  useEffect(() => {
    axios
      .get(
        `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=10&order=relevance&q=${query}&safeSearch=moderate&type=video&videoDefinition=any&videoDimension=any&videoDuration=any&key=${key}`
      )
      .then((response) => {
        const { data } = response;
        const searchResults = data["items"];
        setResultVideos(searchResults);
      });
  });
  return (
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
            <Link
              to="/profile"
              style={{ color: "black", textDecoration: "none" }}
            >
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
        <div className="searchpage">
          <div className="searchpage__wrapper">
            <hr className="searchpage__separator" />
            <div className="resultsGallery">
              {resultVideos.map((resultVideo) => {
                return (
                  <Link
                    to={`/video/${resultVideo.snippet.channelId}/${resultVideo.id.videoId}`}
                  >
                    <VideoResult
                      key={resultVideo.id.videoId}
                      videoId={resultVideo.id.videoId}
                      title={resultVideo.snippet.title}
                      description={resultVideo.snippet.description}
                      author={resultVideo.snippet.channelTitle}
                      thumbnail={resultVideo.snippet.thumbnails.medium.url}
                      live={resultVideo.snippet.liveBroadcastContent}
                    />
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default SearchPage;
