import React from "react";
import "./Banner.css";

const Banner = ({ title, image, dark }) => {
  console.log(image);
  return (
    <div className="banner" style={{ backgroundImage: `url(${image})` }}>
      <div className={dark ? "bannerHover" : "bannerHover2"} />
      <h1>{title}</h1>
    </div>
  );
};

export default Banner;
