import React from "react";
import { aboutList } from "./AboutList";
import Collapse from "../../components/collapse/Collapse";
import "./About.css";
import Banner from "../../components/banner/Banner";

const About = () => {
  return (
    <div className="aboutContainer">
      <Banner image={require("../../images/backg2.png")} />
      <div className="aboutListContainer">
        {aboutList.map((about) => (
          <div key={about.id} className="aboutCollapseContainer">
            <Collapse title={about.title} content={about.content} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default About;
