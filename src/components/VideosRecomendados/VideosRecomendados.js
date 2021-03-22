import React from "react";
import "./VideosR.css";
import VideoCard from "../VideoCard/VideoCard";
import {data} from '../../data'
import { makeStyles } from '@material-ui/core/styles';
import Fab from '@material-ui/core/Fab';
import WhatsAppIcon from '@material-ui/icons/WhatsApp';
import { green } from '@material-ui/core/colors';

const useStyles = makeStyles((theme) => ({
  fab: {
    position: 'fixed',
    bottom: theme.spacing(2),
    right: theme.spacing(2),
  }
}));

const VideosRecomendados = () => {
  const classes = useStyles();

  return (
    <div className="videosR">
      <div className="videosR__videos animate__animated animate__fadeIn " >
        {data.map((sala) => (
          <VideoCard key={sala.id} {...sala} /> 
        ))}
      </div>
        <Fab style={{ color: green[500] }} className={classes.fab}>
          <WhatsAppIcon style={{ fontSize: 40 }} />
        </Fab>
    </div>
  );
};

export default VideosRecomendados;
