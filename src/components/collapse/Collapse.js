import React, { useState } from "react";
import "./Collapse.css";

const Collapse = (props) => {
  const { title, content } = props;
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div>
      <div className="collapse_title" onClick={() => setIsOpen(!isOpen)}>
        <h2>{title}</h2>
        <i
          className={`fa-solid fa-chevron-up ${
            isOpen ? "chevronDown" : "chevronUp"
          }`}
        ></i>
      </div>
      {isOpen && (
        <div className="collapse_content">
          {Array.isArray(content) ? (
            <ul>
              {content.map((equipement, i) => (
                <li key={i}>{equipement}</li>
              ))}
            </ul>
          ) : (
            <div>{content}</div>
          )}
        </div>
      )}
    </div>
  );
};

export default Collapse;
