import React, { useEffect, useState } from "react";

const Rating = (props) => {
  const { rating } = props;
  const [stars, setStars] = useState([]);
  useEffect(() => {
    let newStars = [];
    for (let i = 0; i < 5; i++) {
      if (rating > i) {
        newStars.push("active");
      } else {
        newStars.push("inactive");
      }
    }
    setStars(newStars);
  }, []);
  return (
    <div>
      {stars.map((star, i) =>
        star === "active" ? (
          <img src={require("../../images/star-active.png")} key={i} />
        ) : (
          <img src={require("../../images/star-inactive.png")} key={i} />
        )
      )}
    </div>
  );
};

export default Rating;
