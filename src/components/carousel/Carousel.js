import React, { useState } from "react";
import "./Carousel.css";

const Carousel = (props) => {
  const [index, setIndex] = useState(0);

  const { pictures } = props;

  const increment = () => {
    let newIndex = index + 1;
    if (newIndex > pictures.length - 1) {
      newIndex = 0;
    }
    setIndex(newIndex);
  };

  const decrement = () => {
    let newIndex = index - 1;
    if (newIndex < 0) {
      newIndex = pictures.length - 1;
    }
    setIndex(newIndex);
  };

  return (
    <div>
      <div
        className="carouselImage"
        style={{ backgroundImage: `url(${pictures[index]})` }}
      >
        <img
          className="arrowBack"
          src={require("../../images/arrow-back.png")}
          onClick={decrement}
        />
        <img
          className="arrowNext"
          src={require("../../images/arrow-next.png")}
          onClick={increment}
        />
        <p className="counter">
          {index + 1}/{pictures.length}
        </p>
      </div>
    </div>
  );
};

export default Carousel;
