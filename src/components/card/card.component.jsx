import React from "react";
import "./card.styles.css";

export const Card = (props) => {
  return (
    <div className="card-container">
      <img
        alt="monster"
        src={`https://robohash.org/${props.monster.id}?set=set2&size=160x160`}
      />
      <h3>{props.monster.name}</h3>
      <p>{props.monster.email}</p>
    </div>
  );
};
