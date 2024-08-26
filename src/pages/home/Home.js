import React from "react";
import logements from "../../data/logements.json";
import LogementCard from "../../components/logement-card/LogementCard";
import "./Home.css";
import Banner from "../../components/banner/Banner";

const Home = () => {
  return (
    <div>
      <Banner
        title="Chez vous, partout et ailleurs"
        image={require("../../images/backg1.png")}
        dark={true}
      />
      <div className="cardList">
        {logements.map((logement) => (
          <LogementCard logement={logement} key={logement.id} />
        ))}{" "}
      </div>
    </div>
  );
};

export default Home;
