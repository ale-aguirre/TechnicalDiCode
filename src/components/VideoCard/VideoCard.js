import React from "react";
import Avatar from "@material-ui/core/Avatar";
import "./VideoCard.css";
import { Link } from "react-router-dom";

const VideoCard = ({ id, titulo, canal, vistas, fecha, imagenCanal }) => {
  return (
    <div className="videocard ">
      <Link to={`./video/${id}`} style={{ color: 'inherit', textDecoration: 'none' }}>
        <img
          className="videocard__image "
          src={`./images/${id}.jpg`}
          alt={titulo}
        />
      
      <div className="videocard__info">
        <Avatar
          className="videocard__avatar"
          src={`./images/${imagenCanal}.jpg`}
          alt={canal}
        />
        <div className="videocard__text">
          <h4>{titulo}</h4>
          <p>{canal}</p>
          <p>
            Visto {vistas} • {fecha}
          </p>
        </div>
      </div>
      </Link>
    </div>
  );
};

export default VideoCard;
