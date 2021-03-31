import React from "react";
import './LiveLabel.css'
const LiveLabel = ({ live }) => {
  return (
    <>
      {live === "live" ? (
        <span className="videoCard__live">EN VIVO</span>
      ) : null}
    </>
  );
};

export default LiveLabel;
