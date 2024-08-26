import React from "react";
import { Link } from "react-router-dom";
import "./Error404.css";

const Error404 = () => {
  return (
    <div className="error-container">
      <div className="error-title">404</div>
      <p className="error-text">
        Oups! La page que vous demandez n'existe pas.
      </p>
      <Link to="/kasa" className="error-link">
        Retourner sur la page d’accueil
      </Link>
    </div>
  );
};

export default Error404;
