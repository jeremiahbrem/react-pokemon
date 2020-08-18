import React from "react";
import "./Pokecard.css";

const Pokecard = (props) => {
  const imageSource = 'https://raw.githubusercontent.com/PokeAPI/' +
    `sprites/master/sprites/pokemon/${props.id}.png`;
  return (
    <div className="Pokecard">
      <p className="Pokecard-name">{props.name}</p>
      <img src={imageSource} alt="" />
      <p className="Pokecard-p">Type: {props.type}</p>
      <p className="Pokecard-p">EXP: {props.experience}</p>
    </div>
  )
}

export default Pokecard;