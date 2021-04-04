import React from "react";
import { Link } from "react-router-dom";
import Button from "@material-ui/core/Button";
import { logout } from "../features/userSlice";
import { useDispatch } from "react-redux";
import { selectUser } from "../features/userSlice";
import { useSelector } from "react-redux";
import "./Profile.css";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import Fade from "@material-ui/core/Fade";

const useStyles = makeStyles({
  root: {
    maxWidth: 445,
    marginTop: "1px",
  },
  media: {
    height: 540,
    alignContent: " center",
  },
  container: {
    backgroundSize: "cover",
    backgroundPosition: "center",
    width: `calc(96vw + 48px)`,
    margin: -24,
    padding: 24,
    backgroundImage:
      "url(https://uhdwallpapers.org/uploads/converted/18/04/16/neon-stream-1366x768_46969-mm-90.jpg)",
    justifyContent: "center",
  },
});

const Profile = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const user = useSelector(selectUser);
// eslint-disable-next-line
  const handleLogout = (e) => {
    e.preventDefault();

    dispatch(logout());
  };

  return (
    <Fade in={true}>
      <Box
        className={classes.container}
        display="flex"
        justifyContent="center"
        alignItems="center"
        minHeight="100vh"
      >
        <Card className={classes.root}>
          <CardActionArea>
            <CardMedia
              className={classes.media}
              image="https://wallpaperaccess.com/full/2213424.jpg"
              title="Contemplative"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
              Bienvenido {user.nombre}
            </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                Aun en desarrollo de nuevas funciones, solo esta habilitado VER
                SALAS para redirigirse al Home
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Link to="/home">
              <Button variant="contained" color="primary">
                VER SALAS
              </Button>
            </Link>
          </CardActions>
        </Card>
      </Box>
    </Fade>
  );
};

export default Profile;
