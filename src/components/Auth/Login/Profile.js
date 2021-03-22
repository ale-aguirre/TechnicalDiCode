import React from "react";
import { Link } from "react-router-dom";
import Button from "@material-ui/core/Button";
import { logout } from "../features/userSlice";
import { useDispatch } from "react-redux";
import { selectUser } from "../features/userSlice";
import { useSelector } from "react-redux";
import "./Profile.css";
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
    root: {
      maxWidth: 445,
    },
    media: {
      height: 640,
    },
  });

const Profile = () => {
    const classes = useStyles();
  const dispatch = useDispatch();
  const user = useSelector(selectUser);

  const handleLogout = (e) => {
    e.preventDefault();

    dispatch(logout());
  };

  return (
    <div className="perfil__container">
      {/* <div className="perfil__card">
        <div className="perfil__titulo">
          <h1>
            Bienvenido <span>{user.nombre}</span>
          </h1>
        </div>
        <div className="perfil__info"></div>
        <div className="perfil__botones">
          <Link to="/">
            <Button variant="contained" color="primary">
              VER SALAS
            </Button>
          </Link>
          <Button
            variant="contained"
            color="primary"
            onClick={(e) => handleLogout(e)}
          >
            SALIR
          </Button>
        </div>
      </div> */}
      <Card className={classes.root}>
          
      <CardActionArea>
          
        <CardMedia
          className={classes.media}
          image="https://wallpaperaccess.com/full/2213424.jpg"
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Bienvenido "{user.nombre}"
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Aun en desarrollo de nuevas funciones, solo esta habilitado VER SALAS para redirigirse al Home y SALIR puede deslogearse
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
      <Link to="/">
            <Button variant="contained" color="primary">
              VER SALAS
            </Button>
          </Link>
          <Button
            variant="contained"
            color="primary"
            onClick={(e) => handleLogout(e)}
          >
            SALIR
          </Button>
      </CardActions>
    </Card>
    </div>
  );
};

export default Profile;
