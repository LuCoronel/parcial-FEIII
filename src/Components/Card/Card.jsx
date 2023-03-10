import React from "react";


const Card = ({ name, record }) => {
  return (
    <div className="card">
      <h2> Hola {name}! </h2>
      <h3> Sabemos que {record} es tu disco favorito, nos encanta también!</h3>
    </div>
  );
};

export default Card;
