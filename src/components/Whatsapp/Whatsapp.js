import React from "react";
import WhatsAppIcon from "@material-ui/icons/WhatsApp";
import Fab from "@material-ui/core/Fab";
import { makeStyles } from '@material-ui/core/styles';
import { green } from "@material-ui/core/colors";

const useStyles = makeStyles((theme) => ({
  fab: {
    position: "fixed",
    bottom: theme.spacing(2),
    right: theme.spacing(2),
  },
}));

const Whatsapp = () => {
  const classes = useStyles();
  return (
    <div>
      <a
        href="https://wa.me/+543512618905"
        class="whatsapp_float"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Fab style={{ color: green[500] }} className={classes.fab}>
          <WhatsAppIcon className="whatsapp-icon" style={{ fontSize: 40 }} />
        </Fab>
      </a>
    </div>
  );
};

export default Whatsapp;
