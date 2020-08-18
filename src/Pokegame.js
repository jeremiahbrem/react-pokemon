import React from "react";
import Pokedex from "./Pokedex";
import defaultPokemon from "./defaultPokemon";
import { shuffleArray, getStacksAndScores, getWinner } from "./helpers";
import "./Pokegame.css";

const Pokegame = ({ pokemon=defaultPokemon }) => {
  const shuffledArray = shuffleArray(pokemon);
  const { stack1, stack2, score1, score2 } = getStacksAndScores(shuffledArray);
  const { isWinner1, isWinner2, isTie } = getWinner(score1, score2);
  return (
    <div>
      <h3 className="Pokegame-tie">{isTie}</h3>  
      <div className="Pokegame-pokedex">   
        <div>
            <Pokedex pokemon={stack1} isWinner={isWinner1} />
        </div>
        <div className="Pokegame-right">
            <Pokedex pokemon={stack2} isWinner={isWinner2} />
        </div>
      </div>
    </div>
  )  
}

export default Pokegame;