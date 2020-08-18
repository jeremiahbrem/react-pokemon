import React from "react";
import Pokecard from "./Pokecard";
import defaultPokemon from "./defaultPokemon";
import "./Pokedex.css";

const Pokedex = ({ pokemon=defaultPokemon, isWinner }) => {
  let ifWinner = "";
  if (isWinner) 
    ifWinner = "THIS HAND WINS!"
  return (
    <div className="Pokedex">
      <h3 className="Pokedex-winner">{ifWinner}</h3>
      <div className="Pokedex-pokecards">
        { pokemon.map(p => (
            <Pokecard 
            name={p.name} 
            id={p.id}
            type={p.type}
            experience={p.base_experience}
            />
            ))
        }
      </div>
    </div>
  )  
}

export default Pokedex;