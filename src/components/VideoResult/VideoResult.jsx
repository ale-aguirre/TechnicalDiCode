import React from "react";
import VideoCardIcons from "../VideoCardIcons/VideoCardIcons";
import Live from "../Live/LiveLabel";
import "./VideoResult.css";

const VideoResult = ({
  videoId,
  thumbnail,
  title,
  author,
  live,
  description,
}) => {
  const thumbnailStyle = {
    backgroundImage: "url(" + thumbnail + ")",
  };
  return (
    <>
      <div className="videoResult">
        <div className="videoResult__thumbnail" style={thumbnailStyle}>
          <VideoCardIcons />
        </div>
        <div className="videoResult__body">
          <h2 className="videoResult__title">{title}</h2>
          <span className="videoResult__channel">{author}</span>
          <div className="videoResult__description">
            <p>{description}</p>
          </div>
          <Live live={live} />
        </div>
      </div>
    </>
  );
};

export default VideoResult;
