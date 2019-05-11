import React from "react";
import "./card.css";

const Card = props => {
  return (
    <div className="card text-center" id ="center" style={{ marginBottom: "20px" }}>
      <div className="card-header">
        <h3>{props.heading}</h3>
      </div>
      <div className="card-body text-left" id="body">{props.children}</div>
    </div>
  );
}

export default Card;