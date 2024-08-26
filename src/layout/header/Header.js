import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <header>
      <div className="header">
        <img src={require("../../images/LOGO.png")} alt="Kasa" />
        <nav>
          <Link to="/">accueil</Link>
          <Link to="/about">A propos</Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
