import React from "react";
import "./LogementCard.css";
import { Link } from "react-router-dom";

const LogementCard = (props) => {
  const { logement } = props;
  return (
    <div className="cardContainer">
      <Link
        to={`/kasa/logement/${logement.id}`}
        className="logementCard"
        style={{ backgroundImage: `url(${logement.cover})` }}
      >
        <h3>{logement.title}</h3>
      </Link>
    </div>
  );
};

export default LogementCard;
