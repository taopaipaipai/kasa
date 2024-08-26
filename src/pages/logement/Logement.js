import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import logements from "../../data/logements.json";
import Carousel from "../../components/carousel/Carousel";
import "./Logement.css";
import Collapse from "../../components/collapse/Collapse";
import Rating from "../../components/rating/Rating";

const Logement = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [activeLogement, setActiveLogement] = useState(null);
  const [loading, setLoading] = useState(true);

  console.log(activeLogement);

  useEffect(() => {
    const logement = logements.find((lgt) => lgt.id === id);
    if (logement) {
      setActiveLogement(logement);
      setLoading(false);
    } else {
      navigate("/error-404");
    }
  }, []);

  return loading ? (
    <div>Loading ...</div>
  ) : (
    <div>
      <Carousel pictures={activeLogement.pictures} />

      <div className="logementDescription">
        <div>
          <h2 className="logementTitle">{activeLogement.title}</h2>
          <p>{activeLogement.location}</p>
          <div className="tagList">
            {activeLogement.tags.map((tag, i) => (
              <div className="tagItem" key={i}>
                {tag}
              </div>
            ))}
          </div>
        </div>
        <div className="logementHostContainer">
          <div className="logementHost">
            <div>
              <div>{activeLogement.host.name.split(" ")[0]}</div>
              <div>{activeLogement.host.name.split(" ")[1]}</div>
            </div>
            <img className="hostImage" src={activeLogement.host.picture} />
          </div>
          <Rating rating={activeLogement.rating} />
        </div>
      </div>
      <div className="logementCollapseContainer">
        <div className="logementCollapse">
          <Collapse content={activeLogement.description} title="Description" />
        </div>
        <div className="logementCollapse">
          <Collapse content={activeLogement.equipments} title="Equipements" />
        </div>
      </div>
    </div>
  );
};

export default Logement;
