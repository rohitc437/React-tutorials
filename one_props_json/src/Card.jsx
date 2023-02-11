import React from "react";
import "./card.css";

const Card = ({ title, year, posterurl }) => {
  return (
    <div className="card">
      <img src={posterurl} />
      <p>
        Movie name: <span>{title}</span>
      </p>
      <p>
        Year: <span>{year}</span>
      </p>
    </div>
  );
};

export default Card;
