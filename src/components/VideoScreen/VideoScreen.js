import React, { useMemo } from "react";
import { useParams } from "react-router";
import "./VideoScreen.css";
import VideosRecomendados from "../VideosRecomendados/VideosRecomendados";
import { data } from "../../data";
import ThumbUpIcon from "@material-ui/icons/ThumbUp";
import ThumbDownIcon from "@material-ui/icons/ThumbDown";
import SidebarIconos from "../SidebarIconos/SidebarIconos";
import ReplyIcon from "@material-ui/icons/Reply";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import PlaylistAddIcon from "@material-ui/icons/PlaylistAdd";
import { Avatar, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import GetAppIcon from "@material-ui/icons/GetApp";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  button: {
    margin: theme.spacing(1),
  },
}));

const getVideosById = (id) => {
  return data.find((element) => element.id === id);
};

const VideoScreen = () => {
  const classes = useStyles();
  const { videoId } = useParams();

  const video = useMemo(() => getVideosById(videoId), [videoId]);

  const {
    id,
    titulo,
    descripcion,
    fecha2,
    canal,
    imagenCanal,
    vistas,
    like,
    dislike,
    alumnos,
  } = video;

  return (
    <div className="videoplayer">
      <div className="videoplayer__videodetails">
        <div className="videoplayer__video">
          <img className="video__imagen" src={`../images/${id}.jpg`} alt={titulo}/>
        </div>
        <div className="videoplayer__videoinfo">
          <div className="videoinfo">
            <div className="videoinfo__headline">
              <h1>{titulo}</h1>
            </div>
            <div className="videoinfo__stats">
              <p>
                Visto {vistas} • {fecha2}
              </p><Link to="/under" style={{ color: "inherit", textDecoration: "none" }}>
              <div className="videoinfo__likes">
                <SidebarIconos Icon={ThumbUpIcon} title={like} />
                <SidebarIconos Icon={ThumbDownIcon} title={dislike} />
                <SidebarIconos Icon={ReplyIcon} title="COMPARTIR" />
                <SidebarIconos Icon={PlaylistAddIcon} title="GUARDAR" />
                <SidebarIconos Icon={MoreHorizIcon} title="" />
              </div>
</Link>
            </div>
            <hr />
            <div className="videoinfo__channel">
              <div>
              <Link to="/under" style={{ color: "inherit", textDecoration: "none" }}>
                <Avatar
                  className="videoinfo__avatar"
                  alt={canal}
                  src={`../images/${imagenCanal}.jpg`}
                />
</Link>
                <Link to="/under" style={{ color: "inherit", textDecoration: "none" }}>
                <div className="videoinfo__channelinfo">
                  <h3 className="videoinfo__channeltitle">{canal}</h3>
                  <p className="videoinfo__channelsubs">{alumnos}</p>
                </div>
</Link>
              </div>
              <div className="videoinfo__subscribe">
                <Button
                  href="../resources/test.pdf"
                  download="test.pdf"
                  variant="contained"
                  color="secondary"
                  className={classes.button}
                  startIcon={<GetAppIcon />}
                >
                  DESCARGAR CURSO
                </Button>
                <Link
                  to="/under"
                  style={{ color: "inherit", textDecoration: "none" }}
                >
                  <Button variant="contained" color="secondary">
                    INSCRIBIRSE
                  </Button>
                </Link>
              </div>
            </div>
            <div className="videoinfo__channeldesc">
              <p>{descripcion}</p>
            </div>
          </div>
        </div>
      </div>
      <div className="videoplayer__suggested">
        <VideosRecomendados />
      </div>
    </div>
  );
};

export default VideoScreen;
