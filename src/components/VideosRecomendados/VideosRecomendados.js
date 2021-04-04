import React, { useEffect, useContext } from "react";
import VideoCard from "../VideoCard/VideoCard";
import "./VideosR.css";
import { Link } from "react-router-dom";
import { VideoContext } from "../../VideoContext";
import { numberWithCommas } from "./../../Utilities";
import WhatsApp from "../Whatsapp/Whatsapp";


//libreria para analizar, validar, manipular y dar formato a las fechas.
const moment = require("moment");
require("moment-duration-format");

const VideosRecomendados = () => {
  // eslint-disable-next-line
  const [apiVideos, setApiVideos] = useContext(VideoContext);

  useEffect(() => {
    window.scrollTo(0, 0);
  });

  return (
    <section className="VideosR">
      <div className="VideosR__wrapper">
        {apiVideos.map((apiVideo) => (
          <Link to={`/video/${apiVideo.snippet.channelId}/${apiVideo.id}`}>
            <VideoCard
              key={apiVideo.id}
              title={apiVideo.snippet.title}
              thumbnail={apiVideo.snippet.thumbnails.high.url}
              author={apiVideo.snippet.channelTitle}
              views={numberWithCommas(apiVideo.statistics.viewCount)}
              timestamp={moment(apiVideo.snippet.publishedAt).fromNow()}
              duration={moment
                .duration(apiVideo.contentDetails.duration)
                .format("hh:mm:ss")}
              live={apiVideo.snippet.liveBroadcastContent}
            />
          </Link>
        ))}
      </div>
      <WhatsApp />
    </section>
  );
};

export default VideosRecomendados;
