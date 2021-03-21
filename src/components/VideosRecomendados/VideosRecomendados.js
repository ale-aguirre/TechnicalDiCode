import React, { useMemo } from "react";
import "./VideosR.css";
import VideoCard from "../VideoCard/VideoCard";
import {data} from '../../data'

const VideosRecomendados = () => {
  return (
    <div className="videosR">
      <div className="videosR__videos">
        {data.map((sala) => (
          <VideoCard key={sala.id} {...sala} />
        ))}
      </div>
    </div>
  );
};

export default VideosRecomendados;
