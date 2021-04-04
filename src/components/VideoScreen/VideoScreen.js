import React, { useState, useEffect } from "react";
import axios from "axios";
import VideoPlayer from "../VideoPlayer/VideoPlayer";
import VideoSidebar from "../VideoSidebar/VideoSidebar";
import VideoComment from "../VideoComment/VideoComment";
import VideoDescription from "../VideoDescription/VideoDescription";
import VideoInfo from "../VideoInfo/VideoInfo";
import { key } from "../../Utilities";
import UnfoldMoreIcon from "@material-ui/icons/UnfoldMore";
import "./VideoScreen.css";
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

const VideoScreen = (props) => {
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
  const [singleVideo, setSingleVideo] = useState([]);
  const [comments, setComments] = useState([]);

  const [expandComments, setExpandComments] = useState("closed");

  const toggleComments = () => {
    expandComments === "closed"
      ? setExpandComments("open")
      : setExpandComments("closed");
  };

  const expandedBlock = {
    height: "auto",
  };
  const videoId = props.match.params.videoId;

  useEffect(() => {
    window.scrollTo(0, 0);
    axios
      .get(
        `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2C%20statistics&id=${videoId}&key=${key}`
      )
      .then((response) => {
        const { data } = response;
        const singleVideoResults = data["items"];
        setSingleVideo(singleVideoResults);
      });
  }, [videoId]);
  useEffect(() => {
    axios
      .get(
        `https://youtube.googleapis.com/youtube/v3/commentThreads?part=snippet%2Creplies&videoId=${videoId}&key=${key}`
      )
      .then((response) => {
        const { data } = response;
        const commentsResults = data["items"];
        setComments(commentsResults);
      });
  }, [videoId]);

  return (
    <>
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

          <div className="singleVideo">
            <VideoPlayer video={videoId} />

            {singleVideo.map((singleVideoResponse) => (
              <>
                <VideoInfo
                  title={singleVideoResponse.snippet.title}
                  views={singleVideoResponse.statistics.viewCount}
                  date={singleVideoResponse.snippet.publishedAt}
                  likes={singleVideoResponse.statistics.likeCount}
                  dislikes={singleVideoResponse.statistics.dislikeCount}
                  tags={singleVideoResponse.snippet.tags}
                />
                <hr />
                <VideoDescription
                  description={singleVideoResponse.snippet.description}
                />
              </>
            ))}
            <hr />
            <div
              className="singleVideo__comments"
              onClick={() => toggleComments()}
              style={expandComments !== "closed" ? expandedBlock : null}
            >
              <UnfoldMoreIcon className="singleVideo_expandComments" />
              <div className="singleVideo__container">
                <h3>Comentarios</h3>
                {comments.map((comment) => (
                  <>
                    <VideoComment
                      avatar={
                        comment.snippet.topLevelComment.snippet
                          .authorProfileImageUrl
                      }
                      author={
                        comment.snippet.topLevelComment.snippet
                          .authorDisplayName
                      }
                      date={comment.snippet.topLevelComment.snippet.publishedAt}
                      text={
                        comment.snippet.topLevelComment.snippet.textOriginal
                      }
                    />
                  </>
                ))}
              </div>
            </div>
          </div>
        </main>
        <VideoSidebar />
      </div>
    </>
  );
};
export default VideoScreen;
