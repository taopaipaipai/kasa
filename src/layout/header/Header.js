import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <header>
      <div className="header">
        <img src={require("../../images/LOGO.png")} alt="Kasa" />
        <nav>
          <Link to="/kasa">accueil</Link>
          <Link to="/kasa/about">A propos</Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
