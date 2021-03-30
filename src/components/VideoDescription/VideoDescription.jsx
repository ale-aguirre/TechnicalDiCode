import React, { useState, useEffect } from "react";
import axios from "axios";
import { key, numberWithCommas } from "./../../Utilities";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import { withRouter } from "react-router-dom";
import GetAppIcon from "@material-ui/icons/GetApp";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  button: {
    margin: theme.spacing(1),
  },
}));

const VideoDescription = (props) => {
  const [expandDescription, setExpandDescription] = useState("closed");
  const [channel, setChannel] = useState([]);
  const classes = useStyles();

  const toggleDescription = () => {
    expandDescription === "closed"
      ? setExpandDescription("open")
      : setExpandDescription("closed");
  };
  const expandedBlock = {
    height: "auto",
    overflow: "auto",
  };
  const channelId = props.match.params.channelId;
  useEffect(() => {
    axios
      .get(
        `https://youtube.googleapis.com/youtube/v3/channels?part=snippet%2C%20statistics&id=${channelId}&key=${key}`
      )
      .then((response) => {
        const { data } = response;
        const channelResults = data["items"];
        setChannel(channelResults);
      });
  }, [channelId]);
  console.log(channel);
  return (
    <div
      className="singleVideo__description"
      style={expandDescription !== "closed" ? expandedBlock : null}
    >
      <div className="singleVideo__container">
        <div className="singleVideo__descriptionHead">
          {channel.map((channelData) => (
            <>
              <div className="singleVideo__channel">
                <Avatar src={channelData.snippet.thumbnails.default.url} />
                <div className="singleVideo__channelText">
                  <span className="singleVideo__author">
                    {channelData.snippet.title}
                  </span>
                  <span className="singleVideo__subscribers">
                    {numberWithCommas(channelData.statistics.subscriberCount)}{" "}
                    Suscriptores
                  </span>
                </div>
              </div>
              <div className="singleVideo__subscribeBlock">
              <Button
                  href="../resources/test.pdf"
                  download="test.pdf"
                  variant="contained"
                  color="secondary"
                  className={classes.button}
                  startIcon={<GetAppIcon />}
                >
                  DESCARGAR PDF
                </Button>
              </div>
            </>
          ))}
        </div>
        <div className="singleVideo__descriptionBody">
          <p>{props.description}</p>
        </div>
      </div>
      <Button
        onClick={() => toggleDescription()}
        className="singleVideo__showDescription"
      >
        {expandDescription !== "closed" ? "Show less" : "Show more"}
      </Button>
    </div>
  );
};

export default withRouter(VideoDescription);
