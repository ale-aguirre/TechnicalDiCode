import React from "react";
import { Link } from "react-router-dom";
import "./UnderConstruction.css";

const UnderConstruction = () => {
  return (
    <div className="container">
      <h1>EN CONSTRUCCIÓN</h1>
      <div>
        <p>
          Perdon por el inconveniente, todavia esta en desarrollo la aplicacion.
          Si usted necesita mas ayuda{" "}
          <a
            className="construct"
            href="https://mail.google.com/mail/?view=cm&fs=1&to=aguirrealexis.cba@gmail.com"
            target="_blank"
            rel="noreferrer"
          >
            contacteme
          </a>
          , de igual forma seguira en desarrollo para un futuro cercano.
        </p>
        <p>&mdash; Muchas gracias!</p>
        <br />
        <hr />
        <br />
        <Link to="/" style={{ textDecoration: "none" }}>
          <div className="backtohome">
            <img
              className="header__logo"
              src="https://i.ibb.co/mcMVvkM/image.png"
              alt="logo"
            />
            <p className="backtohome_p" >Volver HOME</p>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default UnderConstruction;
