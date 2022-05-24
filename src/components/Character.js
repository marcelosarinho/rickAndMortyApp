import React from "react";
import "../styles/character.css";

const Character = (props) => {

  const { character } = props;

  return (
    <div className="character-card">
      <div className="character-image-container">
        <img alt={character.name} src={character.image}></img>
      </div>
      <div className="character-info">
        <p>Nome: {character.name}</p>
        <p>Espécie: {character.species}</p>
        {character.origin.name === "unknown" ? (
          <p>Local de origem: Desconhecido</p>
        ) : (
          <p>Local de origem: {character.origin.name}</p>
        )}
        {character.location.name === "unknown" ? (
          <p>Localização: Desconhecida</p>
        ) : (
          <p>Localização: {character.location.name}</p>
        )}
      </div>
    </div>
  )
}

export default Character;